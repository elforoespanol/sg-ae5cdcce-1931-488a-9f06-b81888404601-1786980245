export type ReviewRating = 0 | 1 | 2 | 3;

export function calculateNextReview(
  schedule: { interval: number; easeFactor: number; repetitions: number },
  rating: ReviewRating
): { interval: number; easeFactor: number; repetitions: number; nextReviewDate: Date } {
  const { interval, easeFactor, repetitions } = schedule;

  let newRepetitions = repetitions;
  let newInterval = interval;
  let newEaseFactor = easeFactor;

  if (rating === 0) {
    newRepetitions = 0;
    newInterval = 1;
  } else {
    newRepetitions = repetitions + 1;

    if (newRepetitions === 1) {
      newInterval = 1;
    } else if (newRepetitions === 2) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * easeFactor);
    }
  }

  const easeDelta = 0.1 - (3 - rating) * (0.08 + (3 - rating) * 0.02);
  newEaseFactor = Math.max(1.3, easeFactor + easeDelta);

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + newInterval);

  return {
    interval: newInterval,
    easeFactor: newEaseFactor,
    repetitions: newRepetitions,
    nextReviewDate,
  };
}