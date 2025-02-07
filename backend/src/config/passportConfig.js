import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/users.model.js';
import dotenv from 'dotenv';

dotenv.config();

const jwtOptions = {
  secretOrKey: process.env.JWT_SECRET || 'default_secret',  
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const jwtVerify = async (payload, done) => {
  try {
    const user = await User.findById(payload.id);  
    if (!user) {
      return done(null, false);  
    }
    done(null, user);  
  } catch (error) {
    done(error, false);  
  }
};

passport.use('jwt', new JwtStrategy(jwtOptions, jwtVerify));

export default passport;
