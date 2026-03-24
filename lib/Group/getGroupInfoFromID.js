const axios = require("axios")

exports.run = async (GroupID) => {
    let response

    if (!GroupID)
        return { success: false, message: `GroupID is undefined.` }

    await axios.get("https://groups.roblox.com/v2/groups?groupIds=" + GroupID, {}).then(async function (get_Response) {

        if (!get_Response.data.data[0])
            return response = { success: false, message: `Invalid GroupID` }

        response = {
            GroupID: get_Response.data.data[0].id,
            Name: get_Response.data.data[0].name,
            Description: get_Response.data.data[0].description,
            Owner: {
                UserID: get_Response.data.data[0].owner.id,
                Type: get_Response.data.data[0].owner.type,
            },
            CreatedAt: get_Response.data.data[0].created,
            hasVerifiedBadge: get_Response.data.data[0].hasVerifiedBadge,
            success: true,
        }

    }).catch(async function (error) {

        if (error.response.data.errors[0].message == "NotFound") {
            response = { success: false, message: `Invalid GroupID` }
        } else if (error.response.data.errors[0])
            response = { success: false, message: `${error}` }
    });

    return response
}
