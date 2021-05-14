var UserProfile = (function () {
    var profile = [];

    var getProfile = function () {
        return profile;
    };

    var setProfile = function (x) {
        profile = x;
    };

    return {
        getProfile: getProfile,
        setProfile: setProfile
    }

})();

export default UserProfile;