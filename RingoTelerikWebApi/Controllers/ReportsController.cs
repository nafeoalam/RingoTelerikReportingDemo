using System.Text;
using Microsoft.AspNetCore.Mvc;
using Telerik.Reporting.Services;
using Telerik.Reporting.Services.AspNetCore;

[Route("api/[controller]")]
[ApiController]
public class ReportsController : ControllerBase
{
    private readonly IReportServiceConfiguration reportServiceConfiguration;

    public ReportsController(IReportServiceConfiguration reportServiceConfiguration)
    {
        this.reportServiceConfiguration = reportServiceConfiguration;
    }

    [HttpGet("download/{reportId}")]
    public IActionResult GetReport(string reportId)
    {
        var reportProcessor = new Telerik.Reporting.Processing.ReportProcessor();

        // Assuming reports are stored in a folder named 'Reports'
        string reportsPath = Path.Combine(Directory.GetCurrentDirectory(), "Reports");
        string reportFilePath = Path.Combine(reportsPath, $"{reportId}.trdp"); // Ensure the extension matches your file type

        var reportSource = new Telerik.Reporting.UriReportSource()
        {
            Uri = reportFilePath
        };

        var renderingResult = reportProcessor.RenderReport("PDF", reportSource, null);

        if (renderingResult.HasErrors)
        {
            return BadRequest("Error generating report");
        }

        return File(renderingResult.DocumentBytes, "application/pdf", $"{reportId}.pdf");
    }

    [HttpGet("{reportId}")]
    public IActionResult GetReportAsHtml(string reportId)
    {
        var reportProcessor = new Telerik.Reporting.Processing.ReportProcessor();

        // Assuming reports are stored in a folder named 'Reports'
        string reportsPath = Path.Combine(Directory.GetCurrentDirectory(), "Reports");
        string reportFilePath = Path.Combine(reportsPath, $"{reportId}.trdp"); // Ensure the extension matches your file type

        var reportSource = new Telerik.Reporting.UriReportSource()
        {
            Uri = reportFilePath
        };

        var deviceInfo = new System.Collections.Hashtable();
        deviceInfo["UseEmbeddedCSS"] = true; // Optional: to use CSS styles embedded in the HTML output

        var renderingResult = reportProcessor.RenderReport("HTML5Interactive", reportSource, deviceInfo);

        if (renderingResult.HasErrors)
        {
            return BadRequest("Error generating report");
        }

        return Content(Encoding.UTF8.GetString(renderingResult.DocumentBytes), "text/html");
    }

    [HttpGet("helloworld")]
    public IActionResult HelloWorld()
    {
        return Ok("Hello Dhaka!");
    }
}
