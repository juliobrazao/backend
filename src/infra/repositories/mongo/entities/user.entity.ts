import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  @Prop({ type: String })
  user_id: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: Number })
  created_at: number;

  @Prop({ type: Boolean })
  is_admin: boolean;

  @Prop({ type: Boolean })
  is_active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
