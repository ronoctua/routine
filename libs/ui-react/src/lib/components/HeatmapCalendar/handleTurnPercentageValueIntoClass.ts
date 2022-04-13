export const handleTurnPercentageValueIntoClass = (data: any) => {
  if (!data || !data.date) {
    return 'color-empty';
  }

  if (data.totalPercentage) {
    const scale = `${Number(data.totalPercentage).toFixed(0)}`;

    return scale.length === 1
      ? `color-scale-0`
      : scale.length === 2
      ? `color-scale-${scale[0]}`
      : `color-scale-10`;
  }

  return `color-empty`;
};
