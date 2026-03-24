## Description
This module supports some of ROBLOX API endpoints. You can access to basic info of user/group.
We are currently updating this module every week. If you find a bug please create an issue through Github.
Actually this module is open source.

## Useable Function List

### User Functions

```
getUserInfoFromUsername, getUserRankInGroupFromID, getUserInfoFromID
```

### Group Functions
```
getGroupInfoFromID
```

## Functions

### getUserInfoFromUsername Function
```js
async function example_UserInfoFromUsername() {
    const RobloxAPI = require("bloxit") // 2. Loading Module

    let getUserInfoFromUsername = await RobloxAPI.getUserInfoFromUsername("ROBLOX") // 3. Requesting user info with ROBLOX username.

    // 4. Checking for errors below.
    if (getUserInfoFromUsername.error && getUserInfoFromUsername.message == "Invalid Username") {
        return console.log("Provided Username is invalid!")
    } else if (getUserInfoFromUsername.error) {
        return console.log("Error catched: " + getUserInfoFromUsername.message)
    }

    console.log(getUserInfoFromUsername) // 5. Logging whole info to console.
}
example_UserInfoFromUsername() // 1. Calling function first.
```
#### getUserInfoFromUsername
``` 
# Username               : Username of ROBLOX user.
# UserID                 : UserID of ROBLOX user.
# hasVerifiedBadge       : Is ROBLOX user has Verified badge?
# displayName            : Display name of ROBLOX user.
```

### getUserRankInGroupFromID Function
```js
async function example_UserRankInfo() {

    const RobloxAPI = require("bloxit") // 2. Loading Module

    // 3. Requesting rank info with ROBLOX UserID + ROBLOX GroupID.
    let getUserRankInGroupFromID = await RobloxAPI.getUserRankInGroupFromID({ UserID: "1", GroupID: "7" }) 

    // 4. Checking for errors below.
    if (getUserRankInGroupFromID.error && getUserRankInGroupFromID.message == "Invalid UserID") {
        return console.log("Provided UserID is invalid!")
    } else if (getUserRankInGroupFromID.error) {
        return console.log("Error catched: " + getUserRankInGroupFromID.message)
    } else if (getUserRankInGroupFromID.error && getUserRankInGroupFromID.message == "GroupID is not a number!") {
        return console.log("Provided GroupID is not a ID")
    } else if (!getUserRankInGroupFromID.Group) {
        return console.log("User is not a member of provided group!")
    }

    console.log(getUserRankInGroupFromID) // 5. Logging whole info to console.
}
example_UserRankInfo() // 1. Calling function.
```
#### getUserRankInGroupFromID
``` 
# Group.id               : ID of ROBLOX group.
# Group.Name             : Name of ROBLOX group.
# Group.memberCount      : Member count of ROBLOX group.
# Group.hasVerifiedBadge : Is ROBLOX group has Verified badge?
# Role.id                : Role id in ROBLOX group.
# Role.Name              : Role name in ROBLOX group.
# Role.Rank              : Role rank in ROBLOX group.
```

### getGroupInfoFromID Function
```js
async function example_GroupInfoFromID() {

    const RobloxAPI = require("bloxit") // 2. Loading Module

    // 3. Requesting rank info with ROBLOX UserID + ROBLOX GroupID.
    let getGroupInfoFromID = await RobloxAPI.getGroupInfoFromID("7")

    // 4. Checking for errors below.
    if (getGroupInfoFromID.error && getGroupInfoFromID.message == "Invalid GroupID") {
        return console.log("Provided GroupID is invalid!")
    } else if (getGroupInfoFromID.error) {
        return console.log("Error catched: " + getGroupInfoFromID.message)
    }

    console.log(getGroupInfoFromID) // 5. Logging whole info to console.
}
example_GroupInfoFromID() // 1. Calling function.
```
#### getGroupInfoFromID
``` 
# GroupID                : ID of ROBLOX group.
# Description            : Description of ROBLOX group.
# Owner.UserID           : Owner ID of ROBLOX group.
# Owner.Type             : Owner type of ROBLOX group?
# CreatedAt              : Group creation date.
# hasVerifiedBadge       : Is ROBLOX group has verified badge.
```


### getUserInfoFromID Function
```js
async function example_UserInfoFromID() {

    const RobloxAPI = require("bloxit") // 2. Loading Module

    let getUserInfoFromID = await RobloxAPI.getUserInfoFromID("1") // 3. Requesting more user info with ROBLOX UserId.

    // 4. Checking for errors below.
    if (getUserInfoFromID.error && getUserInfoFromID.message == "Invalid UserID") {
        return console.log("Provided UserID is invalid!")
    } else if (getUserInfoFromID.error) {
        return console.log("Error catched: " + getUserInfoFromID.message)
    }

    console.log(getUserInfoFromID) // 5. Logging whole info to console.

}
example_UserInfoFromID() // 1. Calling function.
```
#### getUserInfoFromID
``` 
# UserID                 : UserID of ROBLOX user.
# Username               : Username of ROBLOX user.
# hasVerifiedBadge       : Is ROBLOX user has Verified badge?
# displayName            : Display name of ROBLOX user.
# externalAppDisplayName : Unknown, returns null everytime.
# isBanned               : Is ROBLOX user banned?
# CreatedAt              : Creation Date of ROBLOX user.
# Description            : Description of ROBLOX user.
```