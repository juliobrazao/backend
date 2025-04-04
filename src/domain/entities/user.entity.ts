export default class User {
  id: string;
  userId: string;
  name: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;

  constructor(params) {
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const param = params[key];
        this[key] = param;
      }
    }
  }
}
