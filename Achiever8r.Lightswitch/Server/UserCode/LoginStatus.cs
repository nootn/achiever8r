using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication.UserCode
{
    public class LoginStatus
    {
        //This should probably be configurable
        private const int TimeoutInSeconds = 10;

        public static ConcurrentDictionary<string, LoginStatus> UsersLoggedIn = new ConcurrentDictionary<string, LoginStatus>();

        public DateTimeOffset InitialLogin { get; set; }

        public DateTimeOffset? LastConnect { get; set; }

        public DateTimeOffset? LastDisconnect { get; set; }

        public bool IsLoggedIn()
        {
            if (LastDisconnect != null && LastConnect != null)
            {
                if (LastDisconnect >= LastConnect && DateTimeOffset.Now.Subtract(LastDisconnect.Value).TotalSeconds > TimeoutInSeconds)
                {
                    //If they disconnected after last connecting, and there has been a bit of a delay (to allow for firing up the hub on a new screen) then they must be gone
                    return false;
                }
            }
            return true;
        }
    }
}