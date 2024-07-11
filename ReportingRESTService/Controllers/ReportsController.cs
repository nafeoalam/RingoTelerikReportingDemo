namespace CSharp.Net6.ReportingRestServiceCorsDemo.Controllers
{
    using System.Diagnostics;
    using System.Net;
    using System.Net.Mail;
    using Microsoft.AspNetCore.Mvc;
    using Telerik.Reporting.Services;
    using Telerik.Reporting.Services.AspNetCore;

    [Route("api/[controller]/render")]
    [ApiController]
    public class ReportsController : ReportsControllerBase
    {
        public ReportsController(IReportServiceConfiguration reportServiceConfiguration)
            : base(reportServiceConfiguration)
        {
         

        }
    }
}
