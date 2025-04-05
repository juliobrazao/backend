export default abstract class IUserRepository<Entity> {
  abstract get(): Promise<Entity[]>;
  abstract create(user: Entity): Promise<Entity>;
}
