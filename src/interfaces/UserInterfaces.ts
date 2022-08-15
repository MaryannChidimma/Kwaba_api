
interface CreateUserInterace {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  id?: string;
}

interface AUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  id?: string;

}


interface UserLogin {
  email: string;
  password: string;
}


export {
  AUser,
  UserLogin,
  CreateUserInterace,
};
