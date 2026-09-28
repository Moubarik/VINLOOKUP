// engine.js — VIN Lookup Parasite SEO Engine
// Fetched at runtime by Code.gs via UrlFetchApp + eval()
// All logic lives here. Code.gs stays clean.

(function(io0, art) {

  // ─────────────────────────────────────────────
  // VARIANTS — 100 title/meta/keyword combinations
  // ─────────────────────────────────────────────
  var VARIANTS = {
    "1":  { title: "Free VIN Lookup 2026 – Check Any Used Car History",        h1kw: "free vin lookup",        meta: "Run a free VIN lookup with no sign up. Check title, theft, recalls and used-car history before you buy. Start your VIN check now." },
    "2":  { title: "Free VIN Lookup 2026 – No-Cost Vehicle History Guide",     h1kw: "free vin check",         meta: "Free VIN lookup for used cars with no payment required. Review vehicle history and title signals before buying. Check your VIN now." },
    "3":  { title: "Free VIN Lookup 2026 – Vehicle History Check Guide",       h1kw: "vehicle history report", meta: "Try a free VIN lookup with no credit card. Decode the VIN, review recalls and research vehicle history before purchase. Start free." },
    "4":  { title: "Free VIN Lookup 2026 – No Sign Up VIN Check Guide",        h1kw: "vin number lookup",      meta: "Free VIN lookup with instant results and no sign up. Research used-car history, title status and recalls. Run a check now." },
    "5":  { title: "Free VIN Lookup 2026 – VIN Check Without Paying",          h1kw: "check vin free",         meta: "Use a free VIN lookup to research a used vehicle before purchase. No payment or email required. Enter your VIN and check now." },
    "6":  { title: "Free VIN Lookup 2026 – Free Car History Explained",        h1kw: "free car history",       meta: "Free VIN lookup and VIN decoder for used-car research. Check available title, recall and theft data with no sign up. Start now." },
    "7":  { title: "Free VIN Lookup 2026 – VIN Decoder & History Guide",       h1kw: "vin decoder free",       meta: "Run a free VIN lookup before buying a car. Review available vehicle history at no cost and spot red flags. Check the VIN now." },
    "8":  { title: "Free VIN Lookup 2026 – No Payment Vehicle Check",          h1kw: "free vin report",        meta: "Get a free VIN lookup with no credit card required. Research recalls, title signals and vehicle details before buying. Run now." },
    "9":  { title: "Free VIN Lookup 2026 – Used Car VIN Check Review",         h1kw: "used car vin check",     meta: "Free VIN lookup for quick pre-purchase research. No sign up required. Decode the VIN and review available history before you buy." },
    "10": { title: "Free VIN Lookup 2026 – Instant Vehicle History Check",     h1kw: "instant vin lookup",     meta: "Use our free VIN lookup to check a used car before purchase. No payment, no email required. Start your VIN search now." },
    "11": { title: "Free VIN Check 2026 – No Cost Used Car History",           h1kw: "free vin lookup",        meta: "Run a free VIN check instantly. No sign up, no credit card, no email. Start researching used-car history right now." },
    "12": { title: "Free VIN Check 2026 – Vehicle History at Zero Cost",       h1kw: "free vin check",         meta: "Free VIN check for pre-purchase research. Review available accident, title and recall data. No payment required. Check now." },
    "13": { title: "Free VIN Check 2026 – Check Car History Before Buying",    h1kw: "vehicle history check",  meta: "A free VIN check helps you spot salvage titles, accidents and theft records before buying. Start your free VIN check today." },
    "14": { title: "Free VIN Check 2026 – No Sign Up Vehicle History",         h1kw: "vin check free",         meta: "Check VIN free with no registration required. Research title, recalls, odometer and stolen vehicle data before buying." },
    "15": { title: "Free VIN Check 2026 – Instant No-Cost Car Report",         h1kw: "free car report",        meta: "Free VIN check with instant available results. Identify title problems, recalls and accident signals before purchase. Run now." },
    "16": { title: "VIN Lookup Free 2026 – No Cost Used Car Research",         h1kw: "vin lookup free",        meta: "VIN lookup free and instant. No sign up, no payment. Review available vehicle history before buying any used car." },
    "17": { title: "VIN Lookup Free 2026 – Used Car History No Charge",        h1kw: "free vehicle history",   meta: "VIN lookup free for used car buyers. Check accident history, salvage title and recalls without paying. Start now." },
    "18": { title: "VIN Lookup Free 2026 – Check Vehicle History Now",         h1kw: "check vehicle history",  meta: "Run a free VIN lookup before any used car purchase. No email or credit card required. Decode the VIN and review results." },
    "19": { title: "VIN Lookup Free 2026 – No Registration Required",          h1kw: "vin number check",       meta: "Free VIN lookup with no registration required. Check title status, theft history and recall data before buying used." },
    "20": { title: "VIN Lookup Free 2026 – Instant Vehicle Record Search",     h1kw: "vehicle record search",  meta: "Instant free VIN lookup for used car buyers. Review available history, title check and recall info with no payment." },
    "21": { title: "Vehicle History Report Free 2026 – Full VIN Guide",        h1kw: "vehicle history report", meta: "A free vehicle history report lets you screen used cars before purchase. No sign up. Check VIN now and avoid costly mistakes." },
    "22": { title: "Vehicle History Report Free 2026 – No Cost Car Check",     h1kw: "free vin lookup",        meta: "Free vehicle history report research guide. Compare free VIN tools vs Carfax. Review title, accidents and recalls at no cost." },
    "23": { title: "Vehicle History Report Free 2026 – VIN Check Guide",       h1kw: "vin check guide",        meta: "Run a free vehicle history report check before buying any used car. No payment required. Start your VIN lookup now." },
    "24": { title: "Vehicle History Free 2026 – Check Before You Buy",         h1kw: "free vehicle history",   meta: "Free vehicle history check for used car shoppers. Review available accident, title and stolen vehicle data. Check now." },
    "25": { title: "Vehicle History Free 2026 – No Subscription VIN Check",    h1kw: "no subscription vin",    meta: "Free vehicle history research with no subscription. Check VIN, review recalls, title data and accident signals at no cost." },
    "26": { title: "Check VIN Free 2026 – No Cost Used Car Lookup",            h1kw: "check vin free",         meta: "Check VIN free before buying any used car. Review available title, accident and recall data. No sign up or payment required." },
    "27": { title: "Check VIN Free 2026 – Instant Vehicle History Guide",      h1kw: "free vin lookup",        meta: "Check VIN free with instant available results. Research used car history, salvage title signals and stolen vehicle data." },
    "28": { title: "Check VIN Free 2026 – No Email Vehicle History",           h1kw: "vin history check",      meta: "Check VIN free with no email required. Research vehicle history, accident data and recall information before purchase." },
    "29": { title: "Check VIN Free 2026 – Used Car History at Zero Cost",      h1kw: "used car history",       meta: "Check VIN free for any used car before purchase. No payment, no sign up, no email. Run your vehicle history research now." },
    "30": { title: "Check VIN Free 2026 – Before You Buy Any Used Car",        h1kw: "check vin before buying", meta: "Always check VIN free before buying a used car. Spot salvage titles, accidents and open recalls before spending money." },
    "31": { title: "Free Car History Check 2026 – VIN Lookup No Cost",         h1kw: "free car history",       meta: "Free car history check by VIN with no payment. Research title status, accident data and recall information before buying." },
    "32": { title: "Free Car History Check 2026 – Used Vehicle Research",      h1kw: "free vin lookup",        meta: "Free car history check for used car buyers. Compare free VIN sources vs Carfax. No sign up or payment required." },
    "33": { title: "Free Car History 2026 – VIN Check Before Buying",          h1kw: "car history vin",        meta: "Free car history research by VIN. Check accident signals, title brands and recall data before any used car purchase." },
    "34": { title: "Free Car History 2026 – No Cost Vehicle Record Check",     h1kw: "vehicle record check",   meta: "Free car history check with no cost. Review available VIN data on accidents, titles and stolen vehicle records." },
    "35": { title: "Free Car History 2026 – Instant VIN Report Guide",         h1kw: "instant vin report",     meta: "Get a free car history check instantly by VIN. No email or payment needed. Start your pre-purchase research now." },
    "36": { title: "Free VIN Report 2026 – No Cost Used Car Research",         h1kw: "free vin report",        meta: "Run a free VIN report before buying any used car. Review title, accident and recall data at no cost. Start now." },
    "37": { title: "Free VIN Report 2026 – Vehicle History No Subscription",   h1kw: "free vin lookup",        meta: "Free VIN report with no subscription or sign up. Research vehicle history, salvage title and stolen vehicle data." },
    "38": { title: "Free VIN Report 2026 – No Email Required VIN Check",       h1kw: "vin check no email",     meta: "Free VIN report with no email required. Check title brands, recall data and accident history before buying used." },
    "39": { title: "VIN History Check Free 2026 – No Cost Car Guide",          h1kw: "vin history check",      meta: "VIN history check for free before buying any used car. Review available title, accident and recall data instantly." },
    "40": { title: "VIN History Lookup Free 2026 – Used Car Research",         h1kw: "vin history lookup",     meta: "VIN history lookup free with no sign up. Research used car history, salvage title and theft data at no cost." },
    "41": { title: "Free VIN Decoder 2026 – Vehicle History Research Guide",   h1kw: "free vin decoder",       meta: "Free VIN decoder and vehicle history research guide. Decode any VIN and check recalls, title and accident data." },
    "42": { title: "Free VIN Decoder 2026 – Decode Any Car VIN No Cost",       h1kw: "decode vin free",        meta: "Free VIN decoder for any used car. Decode the 17-digit VIN and review available vehicle history data instantly." },
    "43": { title: "Free VIN Decoder 2026 – No Sign Up VIN Research",          h1kw: "vin decoder no signup",  meta: "Free VIN decoder with no sign up required. Research vehicle specs, title data and recall information before buying." },
    "44": { title: "VIN Decoder Free 2026 – No Cost Vehicle Research",         h1kw: "vin decoder free",       meta: "VIN decoder free for any 17-digit vehicle ID. Research specs, title signals and recall data. No payment required." },
    "45": { title: "VIN Decoder Free 2026 – Decode & Check Car History",       h1kw: "free vin lookup",        meta: "VIN decoder free plus vehicle history research. Check accident data, title brands and stolen vehicle records at no cost." },
    "46": { title: "Carfax Alternative Free 2026 – Top VIN Lookup Guide",      h1kw: "carfax alternative",     meta: "Looking for a Carfax alternative that is free? This guide covers the top free VIN lookup tools and what each one shows." },
    "47": { title: "Carfax Alternative Free 2026 – No Cost Vehicle History",   h1kw: "free vin lookup",        meta: "Free Carfax alternative VIN lookup guide for 2026. Review top free tools for title, accident and recall research." },
    "48": { title: "Carfax Alternative Free 2026 – VIN Check No Payment",      h1kw: "free carfax alternative", meta: "The best free Carfax alternative for 2026. Check VIN history at no cost before buying any used car. Compare now." },
    "49": { title: "Free Carfax Alternative 2026 – VIN Lookup Guide",          h1kw: "carfax alternative free", meta: "Free Carfax alternative VIN lookup tools reviewed for 2026. Check used car history without paying $49 per report." },
    "50": { title: "Free Carfax Alternative 2026 – No Cost Car History",       h1kw: "free vin check",         meta: "Free Carfax alternative guide. Run a free VIN check and review title, accident and recall data without a subscription." },
    "51": { title: "Free Salvage Title Check 2026 – VIN Lookup Guide",         h1kw: "salvage title check",    meta: "Free salvage title check by VIN. Identify salvage, rebuilt and total-loss vehicles before buying. No sign up required." },
    "52": { title: "Salvage Title Check Free 2026 – VIN History Guide",        h1kw: "free vin lookup",        meta: "Salvage title check free by VIN for 2026. Review title brands, flood damage and theft data before buying used." },
    "53": { title: "Free Stolen Vehicle Check 2026 – VIN Lookup Guide",        h1kw: "stolen vehicle check",   meta: "Free stolen vehicle check by VIN. Search NICB data and identify theft records before purchasing any used car." },
    "54": { title: "Stolen Vehicle Check Free 2026 – No Cost VIN Search",      h1kw: "free vin lookup",        meta: "Stolen vehicle check free by VIN. Identify unrecovered theft records and salvage data before any used car purchase." },
    "55": { title: "Free Accident History Check 2026 – VIN Lookup Guide",      h1kw: "accident history check", meta: "Free accident history check by VIN. Research available collision, damage and total-loss data before buying used." },
    "56": { title: "Accident History Check Free 2026 – VIN Research",          h1kw: "free vin lookup",        meta: "Accident history check free by VIN for 2026. Review available collision and insurance event data before purchase." },
    "57": { title: "Free Odometer Check 2026 – VIN Rollback History Guide",    h1kw: "odometer check vin",     meta: "Free odometer rollback check by VIN. Review mileage history data and spot suspicious odometer patterns before buying." },
    "58": { title: "Free Recall Check VIN 2026 – NHTSA Lookup Guide",          h1kw: "recall check vin",       meta: "Free recall check by VIN using NHTSA data. Identify unrepaired safety recalls before buying any used vehicle." },
    "59": { title: "Free Title Check VIN 2026 – No Cost Vehicle History",      h1kw: "free title check",       meta: "Free title check by VIN for 2026. Review salvage, rebuilt and clean title brands before buying any used car." },
    "60": { title: "Title Check Free 2026 – VIN Lookup Before Buying",         h1kw: "free vin lookup",        meta: "Title check free by VIN. Research salvage title history, brand records and title events before any used car purchase." },
    "61": { title: "Free VIN Search 2026 – No Cost Car History Lookup",        h1kw: "free vin search",        meta: "Free VIN search for any used car. Review title, accident, theft and recall data instantly. No sign up required." },
    "62": { title: "VIN Search Free 2026 – Instant Vehicle History Check",     h1kw: "vin search free",        meta: "VIN search free and instant for 2026. Research used car history, title brands and recall data at no cost." },
    "63": { title: "Free VIN Number Lookup 2026 – Vehicle History Guide",      h1kw: "vin number lookup",      meta: "Free VIN number lookup for any used car. Check title, accident and recall data instantly with no payment required." },
    "64": { title: "VIN Number Lookup Free 2026 – No Cost Car Research",       h1kw: "free vin lookup",        meta: "VIN number lookup free for 2026. Research used car history, salvage title and recall data with no sign up." },
    "65": { title: "Free VIN Lookup No Sign Up 2026 – Car History Guide",      h1kw: "vin lookup no signup",   meta: "Free VIN lookup with no sign up for 2026. Check vehicle history, title and accident data without creating an account." },
    "66": { title: "Free VIN Lookup No Email 2026 – Instant Car History",      h1kw: "vin lookup no email",    meta: "Free VIN lookup with no email required. Review available vehicle history and title signals before buying. Check now." },
    "67": { title: "Free VIN Check No Sign Up 2026 – Vehicle History",         h1kw: "vin check no signup",    meta: "Free VIN check with no sign up required. Research vehicle history, recalls and title data. Start your lookup now." },
    "68": { title: "Free VIN Check No Credit Card 2026 – Car History",         h1kw: "vin check no credit",    meta: "Free VIN check with no credit card required. Review title, accident and recall data before buying any used car." },
    "69": { title: "Check Car VIN Free 2026 – No Cost History Lookup",         h1kw: "check car vin free",     meta: "Check car VIN free before buying used. Review available title, accident and recall data instantly. No payment needed." },
    "70": { title: "Car VIN Lookup Free 2026 – No Cost History Guide",         h1kw: "car vin lookup free",    meta: "Car VIN lookup free for 2026. Research used vehicle history, salvage title and recall data at no cost. Start now." },
    "71": { title: "NHTSA VIN Check Free 2026 – Recall & Decoder Guide",       h1kw: "nhtsa vin check",        meta: "NHTSA VIN check free guide for 2026. Decode any VIN and check for unrepaired safety recalls at no cost." },
    "72": { title: "NICB VIN Check Free 2026 – Stolen Vehicle Lookup",         h1kw: "nicb vin check",         meta: "NICB VIN check free guide for 2026. Check stolen vehicle and salvage records before buying any used car." },
    "73": { title: "NMVTIS VIN Check 2026 – Free Title History Guide",         h1kw: "nmvtis vin check",       meta: "NMVTIS VIN check guide for 2026. Research title brands, odometer records and salvage history before buying." },
    "74": { title: "Free Government VIN Check 2026 – Official Lookup Guide",   h1kw: "government vin check",   meta: "Free government VIN check guide for 2026. Review NHTSA, NICB and NMVTIS tools for used car research at no cost." },
    "75": { title: "Free VIN Lookup Before Buying 2026 – Used Car Guide",      h1kw: "vin lookup before buy",  meta: "Always run a free VIN lookup before buying any used car. Review available title, accident and recall data first." },
    "76": { title: "VIN Check Before Buying 2026 – Free No Cost Guide",        h1kw: "vin check before buy",   meta: "VIN check before buying guide for 2026. Free tools to research used car history, title and recall data before purchase." },
    "77": { title: "Free Used Car History Check 2026 – VIN Lookup Guide",      h1kw: "used car history check", meta: "Free used car history check by VIN for 2026. Review accident, title and recall data before any purchase. No sign up." },
    "78": { title: "Used Car VIN History Free 2026 – No Cost Research",        h1kw: "used car vin history",   meta: "Used car VIN history free for 2026. Research accident, title brands and recall data before buying any used vehicle." },
    "79": { title: "Free Vehicle Title Check 2026 – VIN Lookup Guide",         h1kw: "vehicle title check",    meta: "Free vehicle title check by VIN for 2026. Review salvage, rebuilt and clean title brands before any used car purchase." },
    "80": { title: "Vehicle Title Check Free 2026 – No Cost VIN Research",     h1kw: "free vin lookup",        meta: "Vehicle title check free by VIN. Research salvage and clean title history before buying any used car. No payment." },
    "81": { title: "Free VIN Lookup Instant 2026 – No Cost Car History",       h1kw: "instant vin lookup",     meta: "Free VIN lookup with instant results. Review vehicle history, title and recall data in seconds. No sign up required." },
    "82": { title: "Instant Free VIN Lookup 2026 – Vehicle History Guide",     h1kw: "free vin lookup",        meta: "Instant free VIN lookup for any used car. Review available accident, title and recall data before buying. Start now." },
    "83": { title: "Free VIN Lookup Online 2026 – No Cost Car Research",       h1kw: "vin lookup online free", meta: "Free VIN lookup online for 2026. Research used car history, salvage title and recall data at no cost anywhere." },
    "84": { title: "VIN Lookup Online Free 2026 – Instant History Check",      h1kw: "free vin lookup",        meta: "VIN lookup online free and instant for 2026. Check used car history, title brands and recall data with no payment." },
    "85": { title: "Free VIN Checker 2026 – No Cost Vehicle History Tool",     h1kw: "free vin checker",       meta: "Free VIN checker for used car buyers. Research title, accident and recall data instantly with no sign up required." },
    "86": { title: "VIN Checker Free 2026 – No Cost Car History Guide",        h1kw: "vin checker free",       meta: "VIN checker free guide for 2026. Compare top free VIN tools and review used car history at no cost. Start now." },
    "87": { title: "Free Auto History Report 2026 – VIN Lookup Guide",         h1kw: "auto history report",    meta: "Free auto history report by VIN for 2026. Research used vehicle accident, title and recall data before any purchase." },
    "88": { title: "Free Automobile History Report 2026 – VIN Check",          h1kw: "free vin lookup",        meta: "Free automobile history report by VIN. Review available title, accident and recall data before buying any used car." },
    "89": { title: "Check Vehicle History Free 2026 – VIN Lookup Guide",       h1kw: "check vehicle history",  meta: "Check vehicle history free by VIN for 2026. Review available accident, title and recall data. No payment required." },
    "90": { title: "Vehicle VIN Lookup Free 2026 – No Cost Car History",       h1kw: "vehicle vin lookup",     meta: "Vehicle VIN lookup free for 2026. Research used car history, salvage title and recall data at no cost. Start now." },
    "91": { title: "Free VIN Lookup 2026 – Salvage Title & Accident Check",    h1kw: "salvage title vin",      meta: "Free VIN lookup for salvage title and accident research. Check used car history before buying. No sign up needed." },
    "92": { title: "Free VIN Lookup 2026 – Flood & Theft History Check",       h1kw: "flood damage vin check", meta: "Free VIN lookup for flood and theft history. Research used car records before buying. No email or payment required." },
    "93": { title: "Free VIN Lookup 2026 – Odometer Rollback & Title Check",   h1kw: "odometer rollback vin",  meta: "Free VIN lookup covering odometer rollback and title check data. Research used car history before any purchase." },
    "94": { title: "Free VIN Lookup 2026 – Recall & Registration History",     h1kw: "recall vin lookup",      meta: "Free VIN lookup covering recall and registration history. Check any used car before buying. No sign up required." },
    "95": { title: "Free VIN Lookup 2026 – Number of Owners & History",        h1kw: "vin ownership history",  meta: "Free VIN lookup covering ownership signals and vehicle history. Research any used car before purchase at no cost." },
    "96": { title: "Free VIN Lookup 2026 – Auction & Private Sale Guide",      h1kw: "auction vehicle vin",    meta: "Free VIN lookup guide for auction and private sale buyers. Check used car history before any purchase. Start now." },
    "97": { title: "Free VIN Lookup 2026 – Rebuilt & Junk Title Research",     h1kw: "rebuilt title vin",      meta: "Free VIN lookup for rebuilt and junk title research. Identify risky used cars before buying. No payment required." },
    "98": { title: "Free VIN Lookup 2026 – Full Pre-Purchase Research Guide",  h1kw: "pre purchase vin check", meta: "Free VIN lookup full pre-purchase research guide. Check accident, title, recall and theft data before any used car buy." },
    "99": { title: "Free VIN Lookup 2026 – No Cost Car History for Buyers",    h1kw: "free vin lookup buyers", meta: "Free VIN lookup guide for all used car buyers. Review available history, title and recall data at no cost. Check now." },
    "100":{ title: "Free VIN Lookup 2026 – Complete Used Car Research Guide",  h1kw: "complete vin research",  meta: "Complete free VIN lookup guide for 2026. Research used car history, salvage title, recalls and theft data at no cost." }
  };

  // ─────────────────────────────────────────────
  // ESCAPE HELPER
  // ─────────────────────────────────────────────
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ─────────────────────────────────────────────
  // HASH GENERATOR
  // ─────────────────────────────────────────────
  function makeHash(io0, art) {
    var seed = String(io0) + String(art) + String(Date.now()).slice(0, -4);
    var hash = 0;
    for (var i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash).toString(36).toUpperCase().slice(0, 8);
  }

  // ─────────────────────────────────────────────
  // BUILD: <head> block
  // ─────────────────────────────────────────────
  function buildHead(variant, hash, meta) {
    var titleText = esc(variant.title) + ' ' + hash;
    return [
      '<!DOCTYPE html>',
      '<html lang="en">',
      '<head>',
      '<meta charset="UTF-8">',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">',
      '<meta name="description" content="' + esc(meta) + '">',
      '<meta name="robots" content="index, follow">',
      '<title>' + titleText + '</title>',
      '<link rel="canonical" href="https://script.google.com/macros/s/AKfycbzl6OsGKWMR7TyspL-kWD1HkFQJGrhYcIH9hIN76-45c7Yg9ROZQODjpRK8mjtPYcZR/exec?art=' + esc(art) + '">',
      '<style>',
      'body{font-family:Georgia,serif;font-size:16px;line-height:1.7;color:#1a1a1a;max-width:860px;margin:0 auto;padding:16px 20px;}',
      'h1{font-size:1.75rem;line-height:1.3;font-weight:700;margin-bottom:.5rem;}',
      'p{margin:0 0 1rem;}',
      '.kw-clusters{display:none!important;visibility:hidden;height:0;overflow:hidden;}',
      '.last-updated-near{font-size:.8rem;color:#666;}',
      '</style>',
      '</head>',
      '<body>'
    ].join('\n');
  }

  // ─────────────────────────────────────────────
  // BUILD: JSON-LD schema (Article)
  // ─────────────────────────────────────────────
  function buildSchema(variant, hash, dateStr) {
    var schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": variant.title + ' ' + hash,
      "description": variant.meta || '',
      "datePublished": dateStr,
      "dateModified": dateStr,
      "author": { "@type": "Organization", "name": "VIN Research Guide" },
      "publisher": {
        "@type": "Organization",
        "name": "Free VIN Lookup Guide",
        "logo": { "@type": "ImageObject", "url": "https://vin-lookup-free.com/logo.png" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://vin-lookup-free.com/" }
    };
    return '<script type="application/ld+json">' + JSON.stringify(schema) + '<\/script>';
  }

  // ─────────────────────────────────────────────
  // BUILD: FAQ schema
  // ─────────────────────────────────────────────
  function buildFAQSchema() {
    var faqs = [
      { q: "Can I really look up a VIN for free?",               a: "Yes. NHTSA provides a free VIN decoder and recall lookup, while NICB provides a free VIN check for certain stolen vehicle, salvage title, and flood records from participating insurers." },
      { q: "Is a free VIN check as good as Carfax?",             a: "Not necessarily. A free VIN check is excellent for initial screening, but Carfax and paid services may aggregate additional commercial records. Neither guarantees a complete accident history." },
      { q: "Does a free VIN lookup require sign up?",            a: "It depends on the provider. Some tools offer no sign up access, while others request an account or email before showing results." },
      { q: "What does a VIN number reveal?",                     a: "The 17-digit VIN identifies vehicle attributes such as manufacturer and configuration. A vehicle history report connects that VIN with later records such as titles, recalls, ownership signals, mileage, and theft data." },
      { q: "Can I check if a car is stolen by VIN?",             a: "Yes. NICB's free VIN check identifies vehicles reported as stolen and unrecovered in participating insurer records. NICB warns the database is not comprehensive." },
      { q: "How do I find my car's VIN number?",                 a: "Check the lower driver's side of the windshield, driver's door area, vehicle registration, title, and insurance documents." },
      { q: "Does a free VIN check show accident history?",       a: "Some free VIN lookup services display available accident history, but coverage varies. An accident repaired privately may not appear in any database." },
      { q: "Can I check a VIN on a car I do not own?",           a: "Generally yes. Public VIN research tools are commonly used by prospective buyers. A VIN check does not reveal protected personal information such as previous owner names and addresses." },
      { q: "Is NMVTIS the same as Carfax?",                      a: "No. NMVTIS is a federal vehicle-title information system. Carfax is a private commercial provider that combines data from its own network of sources." },
      { q: "Can a VIN check detect odometer rollback?",          a: "A VIN check can reveal odometer rollback warning signs when reported mileage decreases or conflicts with later records. It cannot prove the current odometer reading is accurate." }
    ];
    var faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(function(f) {
        return {
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        };
      })
    };
    return '<script type="application/ld+json">' + JSON.stringify(faqSchema) + '<\/script>';
  }

  // ─────────────────────────────────────────────
  // BUILD: date script (injects last-updated-near spans)
  // ─────────────────────────────────────────────
  function buildDateScript() {
    return [
      '<script>',
      '(function(){',
      '  var d = new Date();',
      '  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];',
      '  var str = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();',
      '  var els = document.querySelectorAll(".last-updated-near");',
      '  for(var i=0;i<els.length;i++){ els[i].textContent = "Last updated: " + str; }',
      '})();',
      '<\/script>'
    ].join('\n');
  }

  // ─────────────────────────────────────────────
  // BUILD: keyword density footer (hidden)
  // ─────────────────────────────────────────────
  function buildKeywords(variant) {
    var clusters = [
      'free VIN lookup no sign up',
      'check VIN number free online',
      'vehicle history report free instant',
      'VIN check before buying used car',
      'free car history no email required',
      'Carfax alternative free 2026',
      'NMVTIS free VIN check online',
      'VIN decoder free no registration',
      'check if car is stolen by VIN',
      'free salvage title check by VIN',
      'free VIN lookup no cost',
      'VIN check free instant results',
      'free vehicle history no signup',
      'free VIN report no email',
      'used car VIN lookup free',
      'free car history report online',
      'check vehicle history free',
      'VIN number history check free',
      'free VIN decoder online',
      'NHTSA VIN decoder free',
      'NHTSA recall VIN lookup',
      'NICB free stolen vehicle check',
      'free title check by VIN',
      'vehicle title history free',
      'salvage title VIN lookup',
      'rebuilt title vehicle check',
      'free accident history VIN',
      'odometer rollback check VIN',
      'mileage history check free',
      'vehicle ownership history VIN',
      'registration history VIN lookup',
      'free flood damage VIN check',
      'free stolen car VIN search',
      'used vehicle history free',
      'VIN report no payment',
      'VIN check no credit card',
      'VIN lookup no email required',
      'free vehicle history report',
      'free VIN search online',
      'car VIN check completely free',
      'Carfax free alternative lookup',
      'AutoCheck alternative free',
      'VinAudit Carfax alternative',
      'NMVTIS vehicle title report',
      'VIN lookup private seller',
      'auction vehicle VIN check',
      'pre purchase VIN lookup',
      '17 digit VIN decoder free',
      'vehicle identification lookup free',
      'VIN number check no signup',
      'instant car history check',
      'free used car title check',
      'free VIN accident lookup',
      'VIN salvage history free',
      'stolen vehicle check VIN',
      'car history VIN decoder',
      variant.h1kw + ' 2026'
    ];
    return '<p class="kw-clusters" style="display:none;visibility:hidden;height:0;overflow:hidden;">' + clusters.join(' ') + '</p>';
  }

  // ─────────────────────────────────────────────
  // BUILD: overlay (app.js equivalent, minimal)
  // ─────────────────────────────────────────────
  // ─────────────────────────────────────────────
  // BUILD: overlay (app.js equivalent, minimal)
  // ─────────────────────────────────────────────

function buildOverlay() {
  return [
  '<style>',
'#ov-card{',
'  width:calc(100% - 20px)!important;',
'  max-width:600px!important;',
'  height:auto!important;',
'  min-height:0!important;',
'  margin:10px auto!important;',
'  padding:18px 14px!important;',
'  box-sizing:border-box!important;',
'  overflow:hidden!important;',
'}',
'#ov-card h3{',
'  font-size:clamp(1rem,5vw,1.4rem)!important;',
'  line-height:1.2!important;',
'  margin:0 0 10px!important;',
'}',
'#ov-card p{',
'  font-size:clamp(.8rem,3.8vw,1rem)!important;',
'  line-height:1.4!important;',
'  margin:8px 0!important;',
'}',
'#ov-btn{',
'  width:100%!important;',
'  height:auto!important;',
'  min-height:40px!important;',
'  padding:10px!important;',
'  margin:8px 0!important;',
'  box-sizing:border-box!important;',
'  font-size:clamp(.75rem,3.5vw,.95rem)!important;',
'  line-height:1.2!important;',
'}',
'@media(max-width:360px){',
'  #ov-card{',
'    width:calc(100% - 12px)!important;',
'    padding:14px 10px!important;',
'    margin:6px auto!important;',
'  }',
'  #ov-card h3{font-size:1rem!important;}',
'  #ov-card p{font-size:.78rem!important;}',
'  #ov-btn{font-size:.78rem!important;padding:9px!important;}',
'}',
'</style>',

    '<div id="overlay" style="display:none;position:fixed;inset:0;width:100vw;height:100vh;background:rgba(8,15,30,0.72);z-index:9999;backdrop-filter:blur(5px);overflow-y:auto;box-sizing:border-box;">',

'<div id="ov-card" style=" background:#fff;margin:10px auto;padding:42px 24px 32px;width:calc(100vw - 20px);max-width:520px;min-height:calc(100vh - 20px);border-radius:24px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.35);font-family:Arial,sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box; ">',

    '<div style="width:76px;height:76px;border-radius:20px;background:#e8f0ff;display:flex;align-items:center;justify-content:center;font-size:42px;margin-bottom:28px;">🚗</div>',

    '<h3 style="font-family:Georgia,serif;font-size:28px;line-height:1.2;color:#111827;margin:0 0 20px;font-weight:700;max-width:430px;">Instant Vehicle History Report</h3>',

    '<p style="font-family:Arial,sans-serif;font-size:17px;line-height:1.65;color:#4b5563;margin:0 0 34px;max-width:430px;">Protect yourself from hidden accidents, salvage titles, and odometer rollbacks before making a purchase. Run your complete vehicle history check right now.</p>',

    '<button id="ov-btn" onclick="redirectToFreeVin()" style="width:100%;max-width:440px;min-height:64px;padding:16px 22px;background:#2563eb;color:#fff;border:none;border-radius:50px;font-family:Arial,sans-serif;font-size:18px;font-weight:700;cursor:pointer;box-shadow:0 8px 22px rgba(37,99,235,0.3);">Check Vehicle History Now&nbsp; →</button>',

    '<p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#6b7280;">No sign up required • Instant secure lookup</p>',

'</div></div>',






    
    '<script>',
    'function redirectToFreeVin(){',
    '  window.open("https://freevin.pages.dev/", "_blank");',
    '}',
    'setTimeout(function(){',
    '  document.getElementById("overlay").style.display="flex";',
    '  document.getElementById("overlay").style.alignItems="center";',
    '  document.getElementById("overlay").style.justifyContent="center";',
    '}, 1000);',
    '<\/script>'
  ].join('\n');
}

  
  // ─────────────────────────────────────────────
  // BUILD: bot detection script
  // Cloaks the overlay and defers heavy content for bots
  // ─────────────────────────────────────────────
  function buildBotScript() {
    return [
      '<script>',
      '(function(){',
      '  var ua = navigator.userAgent.toLowerCase();',
      '  var bots = ["googlebot","bingbot","slurp","duckduckbot","baiduspider","yandexbot","facebot","ia_archiver","semrushbot","ahrefsbot","mj12bot"];',
      '  var isBot = bots.some(function(b){ return ua.indexOf(b) > -1; });',
      '  if(isBot){',
      '    var ov = document.getElementById("overlay");',
      '    if(ov) ov.remove();',
      '    var btns = document.querySelectorAll("button[onclick]");',
      '    btns.forEach(function(b){ b.style.display="none"; });',
      '  }',
      '})();',
      '<\/script>'
    ].join('\n');
  }

  // ─────────────────────────────────────────────
  // INJECT HASHES into raw article HTML
  // Replaces all [HASH] occurrences with generated hash
  // ─────────────────────────────────────────────
  function injectHashes(html, hash, variant) {
    return html
      .replace(/\[HASH\]/g, hash)
      .replace(
        /<h1[^>]*>[\s\S]*?<\/h1>/,
        '<h1 style="padding-top:5pt;padding-left:5pt;text-indent:0pt;line-height:29pt;text-align:left;">' +
        esc(variant.title) + ' ' + hash +
        '</h1>'
      );
  }

  // ─────────────────────────────────────────────
  // FALLBACK page (used when art param is unknown)
  // ─────────────────────────────────────────────
  function fallback(hash) {
    return [
      '<!DOCTYPE html><html lang="en"><head>',
      '<meta charset="UTF-8">',
      '<meta name="viewport" content="width=device-width,initial-scale=1">',
      '<title>Free VIN Lookup 2026 – Vehicle History Check ' + hash + '</title>',
      '<meta name="description" content="Run a free VIN lookup instantly. Check vehicle history, title brands, recalls and theft records before buying any used car. No sign up required.">',
      '</head><body>',
      '<h1>Free VIN Lookup 2026 ' + hash + '</h1>',
      '<p>Enter a VIN number to check vehicle history at no cost. No sign up, no payment, no email required.</p>',
      '</body></html>'
    ].join('\n');
  }

  // ─────────────────────────────────────────────
  // FETCH article.html from GitHub (same repo)
  // ─────────────────────────────────────────────


function fetchArticle(baseUrl) {
  try {
    var headers = {
      'Accept': 'application/vnd.github.v3.raw'
    };
    
    // If you have a token stored in script properties or accessible, pass it here. 
    // Alternatively, make sure your repository is Public so it can be read without a token.
    var resp = UrlFetchApp.fetch(baseUrl + 'article.html', { 
      headers: headers,
      muteHttpExceptions: true 
    });
    
    if (resp.getResponseCode() === 200) {
      return resp.getContentText();
    }
  } catch(e) {}
  return null;
}

  



  
  // ─────────────────────────────────────────────
  // BUILD PAGE — full assembly
  // ─────────────────────────────────────────────
  function buildPage(io0, art) {
    var hash    = makeHash(io0, art);
    var artKey  = String(art);
    var variant = VARIANTS[artKey] || VARIANTS["1"];
    var meta    = variant.meta || '';
    var now     = new Date();
    var dateStr = now.getFullYear() + '-' +
                  String(now.getMonth()+1).padStart(2,'0') + '-' +
                  String(now.getDate()).padStart(2,'0');

    // Try to fetch article body from GitHub sibling file
    // baseUrl must be passed as a global from Code.gs context via GITHUB constant
    var rawBody = null;
    try {
      var GITHUB_BASE = typeof GITHUB !== 'undefined' ? GITHUB : '';
      if (GITHUB_BASE) rawBody = fetchArticle(GITHUB_BASE);
    } catch(e) {}

    if (!rawBody) return fallback(hash);

    var injectedBody = injectHashes(rawBody, hash, variant);

    var parts = [];
    parts.push(buildHead(variant, hash, meta));
    parts.push(buildSchema(variant, hash, dateStr));
    parts.push(buildFAQSchema());
    parts.push(buildOverlay());
    parts.push(buildBotScript());
    parts.push(injectedBody);
    parts.push(buildKeywords(variant));
    parts.push(buildDateScript());
    parts.push('</body></html>');

    return parts.join('\n');
  }

  // ─────────────────────────────────────────────
  // ENTRY POINT — called via eval()(io0, art)
  // ─────────────────────────────────────────────
  return buildPage(io0, art);

});

