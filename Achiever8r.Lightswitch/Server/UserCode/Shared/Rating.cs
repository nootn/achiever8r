using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class Rating
    {
        partial void RatedByUser_Validate(EntityValidationResultsBuilder results)
        {
            if (!RatedByUser.LoginId.Equals(Application.User.Name, StringComparison.InvariantCultureIgnoreCase))
            {
                results.AddPropertyError("You can only alter your own ratings, not someone else's");
            }
        }
    }
}
