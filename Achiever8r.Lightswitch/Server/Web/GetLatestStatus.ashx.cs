using LightSwitchApplication.UserCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication.Web
{
    /// <summary>
    /// Summary description for GetLatestStatus
    /// </summary>
    public class GetLatestStatus : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write(StatusLog.GetLatestStatus());
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}