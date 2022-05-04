import User from '../model/users'
import bcryptjs from 'bcryptjs';

export async function getUser(req,res) {
  const id = req.params.id
  const user = await User.findByPk(id)

  if (user === null) {
    res.status(400).json({
      error: false,
      message: 'User Not found'
    })
  } else {
    return res.status(200).json(user)  
  }


}

export async function getUsers(req,res) {
  const users = await User.findAll({
    attributes: ['id','fullname','email','created_at','updated_at']
  });

  return res.status(200).send(users)
}

export async function addUser(req,res) {

  const {fullname, email} =req.body
  const salt = await bcryptjs.genSalt(10)
  const password = await bcryptjs.hash(req.body.password,salt)

  const user = await User.create({ 
    fullname: fullname,
    email: email,
    password: password 
   });
  
  return res.status(200).json(user)
} 

export async function deleteUser(req,res) {
  const id = req.params.id

  const user = await User.destroy({ 
    where: {
      id: id
    }
  })
  console.log(user)
  if(user !== 0)
    return res.status(200).json({
      error: false,
      message: 'User deleted Succesfully'
    })
  else
    return res.status(200).json({
      error: false,
      message: 'User not found'
    })
} 

export  async function updateUser(req,res) {
  const {fullname, email} = req.body
  const id = req.params.id
  const salt = await bcryptjs.genSalt(10)
  const password = await bcryptjs.hash(req.body.password,salt)

  const user = await User.update({
    fullname: fullname,
    email: email,
    password: password
  },{
    where: {id:id}
  })

  if(user[0] !==  0)
    return res.status(200).json({
      error: false,
      message: 'User updated succesfully'
    })
  else
      return res.status(200).json({
        error: true,
        message: "User not found"
      })
 
}

