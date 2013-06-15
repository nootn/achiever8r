using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication.Web
{
    /// <summary>
    /// Returns the currently logged in user
    /// </summary>
    public class GetLoggedInUserName : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            if (ServerApplicationContext.Current != null)
            {
                context.Response.Write(ServerApplicationContext.Current.Application.User.Name);
            }
            context.Response.Write("");
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