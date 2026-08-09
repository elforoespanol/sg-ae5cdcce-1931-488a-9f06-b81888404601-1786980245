export function parseCorrectionFromResponse(aiResponse: string): {
  displayMessage: string;
  correction: {
    original: string;
    corrected: string;
    explanation: string;
  } | null;
} {
  const originalMatch = aiResponse.match(/\[ORIGINAL\]\s*(.+?)(?=\[CORRECTED\]|$)/s);
  const correctedMatch = aiResponse.match(/\[CORRECTED\]\s*(.+?)(?=\[EXPLANATION\]|$)/s);
  const explanationMatch = aiResponse.match(/\[EXPLANATION\]\s*(.+?)(?=\[ORIGINAL\]|$)/s);

  if (originalMatch && correctedMatch && explanationMatch) {
    const cleanMessage = aiResponse
      .replace(/\[ORIGINAL\].*?\[CORRECTED\].*?\[EXPLANATION\].*?(\n|$)/s, "")
      .trim();

    return {
      displayMessage: cleanMessage || aiResponse.replace(/\[ORIGINAL\].*?\[EXPLANATION\].*?(\n|$)/s, "").trim(),
      correction: {
        original: originalMatch[1].trim(),
        corrected: correctedMatch[1].trim(),
        explanation: explanationMatch[1].trim(),
      },
    };
  }

  return {
    displayMessage: aiResponse,
    correction: null,
  };
}