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

    [HttpGet("{reportId}")]
    public IActionResult GetReport(string reportId)
    {
        var reportProcessor = new Telerik.Reporting.Processing.ReportProcessor();
        var reportSource = new Telerik.Reporting.UriReportSource()
        {
            Uri = reportId
        };

        var renderingResult = reportProcessor.RenderReport("PDF", reportSource, null);

        if (renderingResult.HasErrors)
        {
            return BadRequest("Error generating report");
        }

        return File(renderingResult.DocumentBytes, "application/pdf", $"{reportId}.pdf");
    }
}
