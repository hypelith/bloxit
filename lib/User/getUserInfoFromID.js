const axios = require("axios")

exports.run = async (UserID) => {
    let response

    if (!UserID) return { error: true, message: `UserID is undefined.` }

    await axios.get("https://users.roblox.com/v1/users/" + UserID, {}).then(async function (get_Response) {

        if (!get_Response.data) return response = { error: true, message: `UserID is undefined.` }

        response = {
            success: true,
            UserID: get_Response.data.id,
            Username: get_Response.data.name,
            hasVerifiedBadge: get_Response.data.hasVerifiedBadge,
            displayName: get_Response.data.displayName,
            externalAppDisplayName: get_Response.data.externalAppDisplayName,
            isBanned: get_Response.data.isBanned,
            CreatedAt: get_Response.data.created,
            Description: get_Response.data.description,
        }

    }).catch(async function (error) {

        if (error.response.data.errors[0].message == "NotFound") {
            return response = { success: false, message: `Invalid UserID` }
        }

        if (error.data.errors[0])
            response = { success: false, message: `${error}` }
    });

    return response
}