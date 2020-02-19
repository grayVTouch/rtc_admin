const info = `${topContext.admin}/pannel/info`;
const statisticsUserActivityLog = `${topContext.admin}/pannel/statisticsUserActivityLog`;

export default {
    info (success , error , callback , before) {
        return post(info , null , success , error , callback , before);
    } ,

    statisticsUserActivityLog (data , success , error , callback , before) {
        return post(statisticsUserActivityLog , data , success , error , callback , before);
    } ,

};
