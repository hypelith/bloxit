const bloxit = require('./index.js');

async function testAllFunctions() {
    console.log('Starting tests for Bloxit...\n');

    // Test 1: getUserInfoFromUsername - Valid username
    console.log('Test 1: getUserInfoFromUsername with valid username');
    try {
        const result = await bloxit.getUserInfoFromUsername('ROBLOX');
        if (result.success) {
            console.log('✓ Success:', result);
        } else {
            console.log('✗ Failed:', result.message);
        }
    } catch (error) {
        console.log('✗ Error:', error.message);
    }
    console.log('');

    // Test 2: getUserInfoFromUsername - Invalid username
    console.log('Test 2: getUserInfoFromUsername with invalid username');
    try {
        const result = await bloxit.getUserInfoFromUsername('InvalidUsername123456789');
        if (!result.success) {
            console.log('✓ Correctly failed:', result.message);
        } else {
            console.log('✗ Unexpected success:', result);
        }
    } catch (error) {
        console.log('✗ Error:', error.message);
    }
    console.log('');

    // Test 3: getUserInfoFromID - Valid ID
    console.log('Test 3: getUserInfoFromID with valid ID');
    try {
        const result = await bloxit.getUserInfoFromID(1);
        if (result.success) {
            console.log('✓ Success:', result);
        } else {
            console.log('✗ Failed:', result.message);
        }
    } catch (error) {
        console.log('✗ Error:', error.message);
    }
    console.log('');

    // Test 4: getUserInfoFromID - Invalid ID
    console.log('Test 4: getUserInfoFromID with invalid ID');
    try {
        const result = await bloxit.getUserInfoFromID(999999999999);
        if (!result.success) {
            console.log('✓ Correctly failed:', result.message);
        } else {
            console.log('✗ Unexpected success:', result);
        }
    } catch (error) {
        console.log('✗ Error:', error.message);
    }
    console.log('');

    // Test 5: getGroupInfoFromID - Valid ID
    console.log('Test 5: getGroupInfoFromID with valid ID');
    try {
        const result = await bloxit.getGroupInfoFromID(7);
        if (result.success) {
            console.log('✓ Success:', result);
        } else {
            console.log('✗ Failed:', result.message);
        }
    } catch (error) {
        console.log('✗ Error:', error.message);
    }
    console.log('');

    // Test 6: getGroupInfoFromID - Invalid ID
    console.log('Test 6: getGroupInfoFromID with invalid ID');
    try {
        const result = await bloxit.getGroupInfoFromID(999999999999);
        if (!result.success) {
            console.log('✓ Correctly failed:', result.message);
        } else {
            console.log('✗ Unexpected success:', result);
        }
    } catch (error) {
        console.log('✗ Error:', error.message);
    }
    console.log('');

    // Test 7: getUserRankInGroupFromID - Valid UserID and GroupID
    console.log('Test 7: getUserRankInGroupFromID with valid UserID and GroupID');
    try {
        const result = await bloxit.getUserRankInGroupFromID(1, 7);
        if (result.success) {
            console.log('✓ Success:', result);
        } else {
            console.log('✗ Failed:', result.message);
        }
    } catch (error) {
        console.log('✗ Error:', error.message);
    }
    console.log('');

    // Test 8: getUserRankInGroupFromID - User not in group
    console.log('Test 8: getUserRankInGroupFromID with user not in group');
    try {
        const result = await bloxit.getUserRankInGroupFromID(2, 7); // UserID 2 might not be in group 7
        if (result.success && result.Role === 'Guest') {
            console.log('✓ Correctly identified as Guest:', result);
        } else {
            console.log('✗ Unexpected result:', result);
        }
    } catch (error) {
        console.log('✗ Error:', error.message);
    }
    console.log('');

    // Test 9: getUserRankInGroupFromID - All groups for a user
    console.log('Test 9: getUserRankInGroupFromID with UserID only (all groups)');
    try {
        const result = await bloxit.getUserRankInGroupFromID(1);
        if (result.success) {
            console.log('✓ Success: Retrieved groups for user');
            // Log first few groups if available
            if (Array.isArray(result) && result.length > 1) {
                console.log('First group:', result[1]);
            }
        } else {
            console.log('✗ Failed:', result.message);
        }
    } catch (error) {
        console.log('✗ Error:', error.message);
    }
    console.log('');

    // Test 10: getUserRankInGroupFromID - Invalid UserID
    console.log('Test 10: getUserRankInGroupFromID with invalid UserID');
    try {
        const result = await bloxit.getUserRankInGroupFromID(999999999999, 7);
        if (!result.success) {
            console.log('✓ Correctly failed:', result.message);
        } else {
            console.log('✗ Unexpected success:', result);
        }
    } catch (error) {
        console.log('✗ Error:', error.message);
    }
    console.log('');

    console.log('All tests completed.');
}

// Run the tests
testAllFunctions();