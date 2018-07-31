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
            return await Cinema.findById(args.id);
        },

        getUser: async (_, args, { User }) => {
            return await User.findById(args.id)
        }
    }
}