import { delayEffect } from '@routine/ui-effects';
import { HeatmapCalendar, Surface } from '@routine/ui-react';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useQuery } from 'urql';

import { arraySort } from '../../../../shared/libs/arrayHandler';
import {
  userQuery,
  UserQueryDataType,
} from '../../../../shared/queries/user.query';
import { DashboardLayout } from '../../../dashboard/components/DashboardLayout';
import { checklistState as checklistAtomState } from '../../states/checklist.state';
import { Checklist } from '../Checklist';
import { ChecklistFooter } from '../ChecklistFooter';

//
// >>> TEMPORARY DATA!
//
const temporaryHeatmapData = [
  {
    date: '2022-01-16',
    totalPercentage: 100,
    percentages: { checklist: 100 },
  },
  {
    date: '2022-02-05',
    totalPercentage: 100,
    percentages: { checklist: 100 },
  },
  {
    date: '2022-02-10',
    totalPercentage: 60,
    percentages: { checklist: 60 },
  },
  {
    date: '2022-03-09',
    totalPercentage: 60,
    percentages: { checklist: 60 },
  },
  {
    date: '2022-03-11',
    totalPercentage: 100,
    percentages: { checklist: 100 },
  },
  {
    date: '2022-03-19',
    totalPercentage: 100,
    percentages: { checklist: 100 },
  },
  {
    date: '2022-03-23',
    totalPercentage: 20,
    percentages: { checklist: 20 },
  },
  {
    date: '2022-03-26',
    totalPercentage: 50,
    percentages: { checklist: 50, sports: 50 },
    extraData: {
      test: 'Extra data test',
    },
    note: 'This is a note.',
  },
  {
    date: '2022-03-28',
    totalPercentage: 80,
    percentages: { checklist: 70, sports: 90 },
    note: 'This is a note.',
  },
  {
    date: '2022-03-30',
    totalPercentage: 100,
    percentages: { checklist: 100, sports: 100 },
  },
  {
    date: '2022-03-31',
    totalPercentage: 30,
    percentages: { checklist: 30, sports: 30 },
  },
  {
    date: '2022-04-04',
    totalPercentage: 80,
    percentages: { checklist: 70, sports: 90 },
    note: 'This is an example of a random note for this day.',
  },
  {
    date: '2022-04-05',
    totalPercentage: 100,
    percentages: { checklist: 100, sports: 100 },
  },
  {
    date: '2022-04-07',
    totalPercentage: 100,
    percentages: { checklist: 100, sports: 100 },
  },
];

export const ChecklistPageContent = () => {
  const [userData] = useQuery<UserQueryDataType>({ query: userQuery });
  const [checklistState, setChecklistState] = useAtom(checklistAtomState);

  useEffect(() => {
    if (userData.data && userData.data.user) {
      const user = userData.data.user;
      const sortedItems = arraySort(user.items, 'itemOrder');

      user.items = sortedItems;

      setChecklistState({
        ...checklistState,
        error: userData.error,
        stale: userData.stale,
        fetching: userData.fetching,
        user,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  if (userData.error) {
    return (
      <Surface status="negative">
        <h1>Query error!</h1>
        {userData.error.message && <p>{userData.error.message}</p>}
      </Surface>
    );
  }

  if (!userData.data || !userData.data.user) {
    return (
      <Surface status="negative" className={delayEffect()}>
        <p>NO USER DATA IN THE DATABASE!</p>
      </Surface>
    );
  }

  return (
    <DashboardLayout footerContent={<ChecklistFooter />}>
      <HeatmapCalendar heatmapData={temporaryHeatmapData} />
      <Checklist />
    </DashboardLayout>
  );
};
