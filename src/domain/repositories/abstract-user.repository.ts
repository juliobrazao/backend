export default abstract class IUserRepository<Entity> {
  abstract create(user: Entity): Promise<Entity>;
}
