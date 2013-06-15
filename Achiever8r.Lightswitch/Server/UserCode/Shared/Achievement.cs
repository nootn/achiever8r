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
            NumberOfRatings = 0;
        }

        partial void DisplayName_Compute(ref string result)
        {
            result = string.Format("{0} - {1} ({2})", AchievedByUser == null ? "[TBA]" : AchievedByUser.FullName, Description, AchievementCategory == null ? "[TBA]" : AchievementCategory.Description);
        }

        partial void NominatedByUser_Validate(EntityValidationResultsBuilder results)
        {
            //NOTE: due to not being able to set the nominated user in "Achievement.js" we can assume that if it's null here, it's being created in the HTML app:
            if (NominatedByUser == null)
            {
                NominatedByUser = DataWorkspace.GetCurrentUser();
            }

            if (!NominatedByUser.LoginId.Equals(Application.User.Name, StringComparison.InvariantCultureIgnoreCase))
            {
                results.AddPropertyError("You can only alter achievements you created, not someone else's");
            }
        }

    }
}
