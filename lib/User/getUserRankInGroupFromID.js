const axios = require("axios")

exports.run = async (UserID, GroupID) => {
    let response
    let groupsData = []

    await axios.get("https://groups.roblox.com/v2/users/" + UserID + "/groups/roles", {}).then(async function (get_Response) {

        if (GroupID) {
            const groupObject = await (get_Response.data.data).find(x => x.group.id === GroupID)

            if (!response && groupObject) {
                response = {
                    success: true,
                    Group: {
                        id: groupObject.group.id,
                        Name: groupObject.group.name,
                        memberCount: groupObject.group.memberCount,
                        hasVerifiedBadge: groupObject.group.hasVerifiedBadge,
                    },
                    Role: {
                        id: groupObject.role.id,
                        Name: groupObject.role.name,
                        Rank: groupObject.role.rank,
                    },
                }
            } else if (!response) {
                response = {
                    Group: null,
                    Role: "Guest",
                    success: true,
                }
            }
        } else {
            groupsData.unshift({ success: true })
            get_Response.data.data.forEach(element => {
                groupsData.unshift({
                    Group: {
                        id: element.group.id,
                        Name: element.group.name,
                        memberCount: element.group.memberCount,
                        hasVerifiedBadge: element.group.hasVerifiedBadge,
                    },
                    Role: {
                        id: element.role.id,
                        Name: element.role.name,
                        Rank: element.role.rank,
                    },
                })
            });
            response = groupsData
        }


    }).catch(async function (error) {

        if (error.response && error.response.data.errors[0].message == "The user is invalid or does not exist.") {
            return response = { success: false, message: `Invalid UserID` }
        }

        response = { success: false, message: `${error}` }
    });

    if (groupsData[0]) response = { success: true, data: groupsData }
    return response
}
