export default {
    Query: {
        allCinemas: async (_, args, { Cinema }) => {
            const cinemas = await Cinema.find(args);

            return cinemas.map(cinema => {
                cinema._id = cinema._id.toString();
                return cinema
            })
        },

        allUsers: async (_, args, { User }) => {
            const users = await User.find(args);

            return users.map(user => {
                user._id = user._id.toString();
                return user
            })
        },

        getCinema: async (_, args, { Cinema }) => {
            const cinema = await Cinema.findById(args.id);
            return cinema;
        },

        getUser: async (_, args, { User }) => {
            const user = await User.findById(args.id);
            return user
        }
    }
}