import { objectType } from 'nexus';
import { Score } from 'nexus-prisma';

export const ScoreType = objectType({
  name: Score.$name,
  definition(t) {
    t.field(Score.id);
    t.field(Score.owner);
    t.field(Score.ownerId);
    t.field(Score.totalPercentage);
    t.field(Score.percentages);
    t.field(Score.extraData);
    t.field(Score.note);
    t.field(Score.date);
    t.field(Score.category);
  },
});
