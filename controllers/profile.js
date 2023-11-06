const User = require('../models/user');

module.exports = {
  show,
  showEdit,
  update,
};

async function show(req, res) {
  try {
    const viewedUserDoc = await User.findById(req.params.userId).populate('pieces');
    console.log('viewedUserDoc = ', viewedUserDoc);

    if (req.isAuthenticated()) {
      const curUserId = req.user._id;
      console.log('curUserId = ', curUserId);

      if (viewedUserDoc._id.toString() === curUserId.toString()) {
        res.render('profile/profile', { title: 'My Profile', viewedUserDoc, curUserId });
      } else {
        res.render('profile/profile', { title: viewedUserDoc.name + ' WAL', viewedUserDoc, curUserId });
      }
    } else {
      const curUserId = 'not logged in';
      console.log('curUserId = ', curUserId);

      res.render('profile/profile', { title: viewedUserDoc.name + ' WAL', viewedUserDoc, curUserId });
    }
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}


async function showEdit(req, res) {
  try {
    if (req.isAuthenticated()) {
      const curUserDoc = req.user;
      if (curUserDoc._id == req.params.userId) {
        const username = curUserDoc.name;
        res.render('profile/edit', { title: 'Edit ' + username });
      } else {
        res.redirect('/login');
      }
    } else {
      res.redirect('/login');
    }

  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}

async function update(req, res) {
  try {
    if (req.isAuthenticated()) {
      const curUserId = req.user._id;
      const updateFields = {};
      for (const key in req.body) {
        if (key in req.body && req.body[key]) {
          updateFields[key] = req.body[key];
        }
      }
      const user = await User.findByIdAndUpdate(
        curUserId,
        updateFields,
        { new: true }
      );
      res.redirect(`/profile/${curUserId}`);
    } else {
      res.redirect('/');
    }
  } catch (err) {
    console.log(err);
    res.redirect(`/`);
  }
}

