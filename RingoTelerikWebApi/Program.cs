using Telerik.WebReportDesigner.Services.Models;
using Telerik.WebReportDesigner.Services;
using Telerik.Reporting.Cache.File;
using Telerik.Reporting.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System.IO;


var builder = WebApplication.CreateBuilder(args);

// Add CORS configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policyBuilder => policyBuilder.WithOrigins("http://your-react-app.com") // Adjust the origin as per your React app
                                      .AllowAnyHeader()
                                      .AllowAnyMethod());
});



builder.Services.AddRazorPages().AddNewtonsoftJson();

builder.Services.AddControllers();
builder.Services.AddMvc();
builder.Services.TryAddSingleton((Func<IServiceProvider, IReportServiceConfiguration>)(sp =>
	new ReportServiceConfiguration
	{
		ReportingEngineConfiguration = sp.GetService<IConfiguration>(),
		HostAppId = "WebReportDesignerApp",
		Storage = new FileStorage(),
		ReportSourceResolver = new UriReportSourceResolver(GetReportsDir(sp))
	}));
builder.Services.TryAddSingleton<IReportDesignerServiceConfiguration>(sp => new ReportDesignerServiceConfiguration
{
	DefinitionStorage = new FileDefinitionStorage(
		GetReportsDir(sp), new[] { "Resources" }),
	ResourceStorage = new ResourceStorage(
		Path.Combine(sp.GetService<IWebHostEnvironment>().ContentRootPath, "Resources")),
	SharedDataSourceStorage = new FileSharedDataSourceStorage(
		Path.Combine(sp.GetService<IWebHostEnvironment>().ContentRootPath, "Shared Data Sources")),
	SettingsStorage = new FileSettingsStorage(
		Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "Telerik Reporting")),
	// In case you need to define custom permissions to deny, modify GetDeniedPermissions function based on your needs and use the approach below:
	//DeniedPermissions = GetDeniedPermissions(),
});


// Add services to the container.

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}


app.UseRouting();

// Apply CORS policy
app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
	endpoints.MapControllers();
	// ... 
});
app.UseStaticFiles();
// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
});

app.Run();

static string GetReportsDir(IServiceProvider sp)
{
	return Path.Combine(sp.GetService<IWebHostEnvironment>().ContentRootPath, "Reports");
}


/// <summary>
/// Builds permissions which will be denied. Use ReportDesignerPermissionsBuilder for easy conversion between Permission enum to string.
/// In this example implementation the user can't create data sources, can't edit and delete shared data sources and can't access "Shared Data Sources" folder in the assets manager.
/// </summary>
/// <returns>String array with permissions to deny on application level.</returns>
static string[] GetDeniedPermissions()
{
	return ReportDesignerPermissionsBuilder.Build(
		Permission.Commands_DataSources,
		Permission.Commands_AssetsManager_SharedDataSources
	);
}

internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
