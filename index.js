exports.getUserInfoFromUsername = async function (Username) {
    return await require("./lib/User/getUserInfoFromUsername.js").run(Username)
}

exports.getUserInfoFromID = async function (UserID) {
    return await require("./lib/User/getUserInfoFromID.js").run(UserID)
}

exports.getGroupInfoFromID = async function (GroupID) {
    return await require("./lib/Group/getGroupInfoFromID.js").run(GroupID)
}

exports.getUserRankInGroupFromID = async function (UserID = Number, GroupID = Number) {

    let newGroupID = GroupID

    if (!UserID) return { success: false, message: `UserID is undefined.` }
    if (typeof UserID != "number") return { success: false, message: `UserID should be a Number.` }
    if (GroupID == Number) newGroupID = undefined
    if (GroupID && GroupID != Number && typeof GroupID != "number") return { success: false, message: `GroupID should be a Number.` }

    return await require("./lib/User/getUserRankInGroupFromID.js").run(UserID, newGroupID)
}