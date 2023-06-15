// let oldUserData = [];

(async () => {
  try {
    let users = await fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    let res = await users.json();
    addUserDatatoDOM(res);
    pagination();
  } catch (error) {
    console.log(error);
  }
})();
