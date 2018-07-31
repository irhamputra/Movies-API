export default {
    Query: {
        allCinemas: async (_, args, { Cinema }) => {
            const cinemas = await Cinema.find(args);
            return cinemas.map(cinema => {
                cinema._id = cinema._id.toString();
                return cinema
            })
        },

        getCinema: async (_, args, { Cinema }) => {
            const cinema = await Cinema.findById(args._id);

            return cinema;
        }
    }
}