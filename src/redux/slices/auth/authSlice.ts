import { GlobalVariables } from '@/config/constants';
import { User } from '@/types/models';
import { generateRandomNumber, generateRandomString } from '@/utils';
import { faker } from '@faker-js/faker';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  photo: GlobalVariables.imageURL + generateRandomString(),
  id: generateRandomNumber(),
  jobType: faker.person.jobType(),
  pet: faker.internet.emoji({ types: ['flag'] }),

  birthday: generateRandomNumber(896104375, 1274795575),
  companies: [faker.company.name(), faker.company.name()],
  languages: ['language.french', 'language.english'],
  education: 'Stanford University',
  organization: [faker.company.name()],
  numberOfPosts: generateRandomNumber(10, 400),
  numberOfFollowers: generateRandomNumber(10, 99999),
  numberOfFollowing: generateRandomNumber(10, 99999),

  notificationCount: generateRandomNumber(1, 99),
  inboxCount: generateRandomNumber(1, 99),
  eventsCount: generateRandomNumber(1, 99),
  tasksCount: generateRandomNumber(1, 99),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.firstName = user.firstName;
      state.lastName = user.lastName;
      state.email = user.email;
      state.photo = user.photo;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
