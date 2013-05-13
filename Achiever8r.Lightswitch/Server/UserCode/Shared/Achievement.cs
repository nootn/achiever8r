using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class Achievement
    {
        partial void Achievement_Created()
        {
            NominatedByUser = DataWorkspace.ApplicationData.Users.Where(_=>_.LoginId.Equals(Application.User.Name)).Single();
            NominatedOn = DateTime.Now;
        }
    }
}
