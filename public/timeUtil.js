// timeUtil.js
function convertTime(originalTimeString, targetZone) {
  try {
    const DateTime = luxon.DateTime;
    const knownTimezones = [
      "UTC",
      "EST",
      "CST",
      "PST",
      "MST",
      "IST",
      "CET",
      "GMT",
      "BST",
      "JST",
      "AEST",
    ];

    const timeZoneAbbrMap = {
      EST: "America/New_York",
      CST: "America/Chicago",
      MST: "America/Denver",
      PST: "America/Los_Angeles",
      IST: "Asia/Kolkata",
      CET: "Europe/Paris",
      GMT: "Europe/London",
      BST: "Europe/London",
      JST: "Asia/Tokyo",
      AEST: "Australia/Sydney",
      UTC: "UTC",
    };

    // Detect original timezone
    let sourceZone = Object.keys(timeZoneAbbrMap).find((abbr) =>
      originalTimeString.toUpperCase().includes(abbr)
    );

    if (!sourceZone) throw new Error("Source timezone not found in string");

    // Extract time (e.g., 3:00 PM EST → 3:00 PM)
    const timeMatch = originalTimeString.match(/\d{1,2}:\d{2}\s?(AM|PM)?/i);
    if (!timeMatch) throw new Error("Time not found in string");

    const timeOnly = timeMatch[0];

    // Build datetime string with dummy date
    const dateTime = DateTime.fromFormat(timeOnly, "h:mm a", {
      zone: timeZoneAbbrMap[sourceZone],
    });

    if (!dateTime.isValid) throw new Error("Invalid time");

    const converted = dateTime.setZone(timeZoneAbbrMap[targetZone]);

    return converted.toFormat("h:mm a") + " " + targetZone;
  } catch (err) {
    console.error("Time conversion failed", err);
    return "Invalid time";
  }
}

// 👇 Make sure this is attached to window so contentScript can use it
window.convertTime = convertTime;
