import * as talentService from '../services/talent-service'


const highlighted = async (req: any, res: any) => {
    const highlightedTalents = await talentService.listHighlightedTalentsAsync();
    res.send(highlightedTalents);
};

const news = async (req: any, res: any) => {
    const newTalents = await talentService.listNewTalentsAsync();
    res.send(newTalents);
}

module.exports = {
    highlighted,
    news
};