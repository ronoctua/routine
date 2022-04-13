export const handleTurnPercentageValueIntoClass = (data: any) => {
  if (!data || !data.date) {
    return 'color-empty';
  }

  if (data.percentage || data.count || data.percentage === 0) {
    const scale = `${Number(
      data.percentage || data.percentage === 0 ? data.percentage : data.count,
    ).toFixed(0)}`;

    return scale.length === 1
      ? `color-scale-0`
      : scale.length === 2
      ? `color-scale-${scale[0]}`
      : `color-scale-10`;
  }

  return `color-empty`;
};
