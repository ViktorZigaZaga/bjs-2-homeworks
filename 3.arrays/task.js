function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    let avgAgeUsers = users.filter(user => user.gender == gender).reduce((result, item, index, arr) => { 
        result += item.age;
        if (index === arr.length - 1) {
            return result / arr.length;    
        } 
        return result;
    }, 0);
    return avgAgeUsers;
}