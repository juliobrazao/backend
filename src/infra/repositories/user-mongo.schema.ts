import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserMongoSchema extends Document {
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, default: false })
  isAdmin: boolean;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;
}

export const UserMongoSchemaFactory =
  SchemaFactory.createForClass(UserMongoSchema);
