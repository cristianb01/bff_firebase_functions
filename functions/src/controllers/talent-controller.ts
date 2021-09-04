import * as talentService from '../services/talent-service'


const relevant = async (req: any, res: any) => {
    const relevantTalents = await talentService.listRelevantTalentsAsync();
    res.send(relevantTalents);
};

const news = async (req: any, res: any) => {
    const newTalents = await talentService.listNewTalentsAsync();
    res.send(newTalents);
}

module.exports = {
    relevant,
    news
};