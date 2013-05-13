using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class User
    {
        partial void DisplayName_Compute(ref string result)
        {
            result = string.Format("{0} ({1})", FullName, LoginId);
        }
    }
}
