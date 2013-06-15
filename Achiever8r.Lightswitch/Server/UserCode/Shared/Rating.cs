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
            //NOTE: similar to Achievement, if the RatedByUser is null we must be coming from the HTML client, so set it
            if (RatedByUser == null)
            {
                RatedByUser = DataWorkspace.GetCurrentUser();
            }

            if (!RatedByUser.LoginId.Equals(Application.User.Name, StringComparison.InvariantCultureIgnoreCase))
            {
                results.AddPropertyError("You can only alter your own r8ing, not someone else's");
            }

            if (DataWorkspace.ApplicationData.Ratings.Where(_ => _.Achievement.Id == Achievement.Id && _.RatedByUser.LoginId.Equals(Application.User.Name, StringComparison.InvariantCultureIgnoreCase)).FirstOrDefault() != null)
            {
                results.AddPropertyError("You may only r8 an achievement once.  You have already r8ed this achievement, please delete one of the r8ings");
            }
        }

        partial void Rating_Created()
        {
            RatedByUser = DataWorkspace.GetCurrentUser();
            RatedOn = DateTime.Now;
        }

        partial void DisplayName_Compute(ref string result)
        {
            result = string.Format("{0} - {1}", RatedByUser == null ? "[?]" : RatedByUser.DisplayName, Comment);
        }
    }
}
