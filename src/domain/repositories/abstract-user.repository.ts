export default abstract class IUserRepository<Entity, Filter> {
  abstract create(user: Entity): Promise<Entity>;
  abstract get(): Promise<Entity[]>;
  abstract find(filter: Filter): Promise<Entity>;
}
