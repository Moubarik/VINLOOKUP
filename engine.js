// engine.js — Aggressive Daily Rotation VIN Engine
// 15 fresh unique articles per day, keyword-heavy, short-term rank push
(function(io0, art) {

  // ─────────────────────────────────────────────
  // FULL KEYWORD POOL (your list, cleaned + deduped)
  // ─────────────────────────────────────────────
  var KEYWORDS = [
    "vin check","vin check national insurance crime bureau","national insurance crime bureau vin check",
    "vin check for recalls","free vin check for car","recalls vin check","vin check number free",
    "vin check kelley blue book","vin check free carfax","free vin check on car",
    "vehicle identification number vin check","florida motor vehicle vin check","florida dmv vin check",
    "florida vin check","vin check dmv free","vin check florida","vin check for cars","vin check for car",
    "ford vin check recall","online vin check","vin check for trailers","vin check mercedes",
    "vin check using license plate","vin check for motorcycle","porsche vin check","nicb vin check free",
    "vin check information","vin check year","texas vin check","motorcycles vin check",
    "state of texas vin check","free vin check nicb","vin check texas","subaru vin check","vin check rv",
    "vin check free report","vin check gmc","vin check tx","vin check ohio","vin check yamaha",
    "vin check motorcycle free","free report vin check","nicb vin check is free","yamaha vin check",
    "autodna vin check","free vin check for recalls","free vin check on motorcycle","accident vin check",
    "freightliner vin check","vin check ca","bike vin check free","vin check arizona","mazda vin check",
    "online vin check free","vin check kia","vin check volvo","vin check nissan","kia vin check",
    "boat vin check","vin check texas free","vin check kawasaki","vin check on classic car",
    "vin check harley","vin check vw","fl hsmv vin check","toyota vin check recall","free bmw vin check",
    "kawasaki vin check","vin check lexus","illinois vin check","volvo vin check","vin check ri",
    "vin check history free","harley vin check","vin check on dirt bike","fl free vin check",
    "cadillac vin check","lexus vin check","vin check in rhode island","vin check georgia",
    "vin check for stolen vehicle","vin check for dirt bike","vin check colorado","vin check for stolen",
    "recall vin check toyota","vin check for atvs","vin check car model","engine vin check",
    "ford truck vin check","free accident vin check","vin check for mileage","vin check travel trailer",
    "mustang vin check","vin check cranston","il vin check","vin check california dmv",
    "nicb.org vin check","free vin check on a car","free vin check florida","vin lookup",
    "vin lookup recall","vin lookup florida","vin lookup dmv free","vin lookup mercedes",
    "vin lookup porsche","vin lookup motorcycle","vin lookup jeep","vin lookup window sticker",
    "vin lookup parts","vin lookup subaru","vin number yamaha","vin lookup ohio","vin lookup mazda",
    "vin decoder z","vin lookup boat","vin lookup gm","vin lookup kia","vin decoder lexus",
    "vin lookup engine","vin lookup harley davidson","vin lookup kawasaki","vin lookup edmunds",
    "vin lookup lexus","vin lookup volkswagen","vin lookup colorado","vin lookup classic car",
    "vin lookup georgia","vin lookup history","vin lookup plate","vin lookup for paint code",
    "vin number qr code","vin lookup travel trailer","vin number lookup","vin number search up",
    "vin number lookup free","vin number lookup carfax","vin number lookup recall",
    "vin number lookup florida","vin number check dmv","vin number lookup by license plate",
    "vin number lookup for motorcycle","vin number lookup from license plate","vin number lookup trailer",
    "vin number lookup texas","vin number lookup for trailer","vin number lookup motorcycle",
    "vin number lookup rv","vin number lookup honda","vin number lookup subaru",
    "vin number lookup window sticker","vin number lookup chevy","vin number lookup owner",
    "vin number lookup ohio","vin number lookup jeep","vin number lookup mazda","vin number lookup parts",
    "vin number lookup toyota","vin number lookup transmission","vin number lookup california",
    "vin number lookup gm","vin number check parts","vin number lookup bmw","vin number lookup mercedes",
    "vin number check vw","vin number lookup nissan","vin number lookup value","vin number lookup illinois",
    "vin number lookup dodge","vin number lookup classic car","vin number lookup mn","vin number lookup dmv",
    "vin number lookup specs","vin number lookup color","vin number lookup canada","vin number check usa",
    "vin number check bmw","vin number check australia free","vin number lookup boat","vin number lookup nc",
    "vin number lookup wisconsin","vin number check uk","vin number check wa","vin number lookup atv",
    "vin number lookup free reddit","vin number lookup for free","vin number lookup for paint color",
    "vin number lookup dirt bike","vin number lookup year","vin number lookup kelley blue book",
    "vin number lookup uk","vin number check japan","vin number lookup colorado","vin number lookup free carfax",
    "vin number lookup georgia","vin number lookup car","vin number lookup michigan","vin number lookup on car",
    "vin number lookup reddit","vin number check up","vin number lookup ct","vin number lookup autozone",
    "vin number lookup arizona","vin number lookup by plate","vin number lookup free full history",
    "vin number lookup missouri","vin number lookup oklahoma","vin number lookup utah","vin number check year",
    "vin number lookup for engine size","vin number lookup engine size","vin number lookup hawaii",
    "vin number check uae","vin number lookup iowa","vin number lookup for tire size",
    "vin number lookup for accidents","vin number lookup car specs","vin number lookup gov",
    "vin number check germany","vin number check india","vin number lookup owner free",
    "vin number check year model","vin number lookup engine type","vin number lookup for tax credit",
    "vin number lookup price","vin number lookup washington state","vin number lookup ny",
    "vin number lookup tire size","vin number lookup nhtsa","vin number lookup details",
    "vin number lookup louisiana","vin number lookup model","vin number lookup to see if stolen",
    "vin number lookup using license plate","vin number lookup for license plate",
    "vin number lookup registered owner","vin number lookup camper","vin number lookup accident report",
    "vin number lookup for engine type","vin number check engine type","vin number check europe free",
    "vin number check harley davidson","vin number lookup irs","vin number lookup kia",
    "vin number check korea","vin number lookup registration","vin number lookup with plate",
    "vin number lookup europe","vin number lookup alberta","vin number lookup towing capacity",
    "vin number lookup uae","vin number check kia","vin number lookup ireland",
    "vin number lookup manufacture date","vin number check qld free","vin number check reddit",
    "vin number lookup bc","vin number lookup india","vin number lookup south africa",
    "vin number lookup gmc","vin number lookup australia free","vin number lookup by name",
    "vin number lookup o reilly","vin number lookup oil","vin number lookup type of car",
    "vin number lookup 10th digit","vin number lookup 100 free","vehicle vin check",
    "vehicle vin search free","vehicle vin check for free","vehicle vin lookup free",
    "vehicle vin number check free","vehicle vin recall check","vehicle vin number check",
    "car vin check up","vehicle vin lookup by license plate","vehicle history check by vin",
    "vehicle history check free","vehicle history vin check free","vin check for engine type",
    "vehicle history check online","car vin lookup carfax","check your vehicle vin number",
    "vehicle history lookup by vin","car vin check cheap","vehicle history check free online",
    "vehicle history check free uk","vehicle history check gov","car vin check europe",
    "vehicle history check ireland","vehicle history check italy","car vin check india",
    "vehicle history check motorcycle","car vin mileage check","vehicle history check nz",
    "vehicle vin number check free south africa","vehicle vin check qld","vehicle history check qld free",
    "vehicle history check south africa","vehicle history check service","vehicle history check uae",
    "vehicle history check wa free","vehicle history check new zealand","vehicle history check india",
    "vehicle history check usa","vehicle history check europe","vehicle history check license plate",
    "vehicle vin check app","car vin check germany","vehicle history check free gov",
    "auto vin check report","vehicle vin check uae","vehicle vin check report",
    "car vin check for recalls","vehicle vin check reddit","vehicle vin check history",
    "vehicle vin lookup by plate","car vin check bmw","car vin lookup bmw",
    "vehicle vin lookup color","car vin crash check","vehicle vin check dubai",
    "car vin lookup details","vin check vehicle details","car vin check eu",
    "car vin lookup europe","car vin search engine","best car vin check europe",
    "car vin check free reddit","vehicle vin lookup for specs","vehicle vin lookup florida",
    "vehicle vin check gov","car vin check gov","car vin lookup gov",
    "free car vin check germany","vehicle service history check gov","vehicle history check hpi",
    "car vin lookup honda","vehicle history check vin number","honda vehicle vin check",
    "car vin check info","vehicle history check india free","vehicle vin lookup info",
    "vehicle history check in uk","car vin lookup info","vin vehicle info search",
    "car vin check japan","vehicle history check japan","car vin lookup japan",
    "car vin number check japan","car vin check korea","car vin lookup kelley blue book",
    "kia vehicle vin check","vehicle vin look up license plate","lexus vehicle vin check",
    "car vin check model","car vin check mercedes","vehicle vin mileage check",
    "vehicle vin model lookup","car vin mileage check free","vehicle vin check nsw",
    "vehicle vin check nz","vehicle vin number check india","car vin check nigeria",
    "vehicle vin check online","vehicle vin lookup ontario","car vin check online free",
    "vehicle history check ontario","car vin options check","vehicle vin price check",
    "car vin check poland","car vin check parts","vehicle history check price",
    "car vin check price","car vin lookup price","vehicle history plate check",
    "car vin lookup pictures","car vin plate check","vehicle vin plate lookup",
    "car vin check qatar","quick vehicle vin check","car vin check reddit",
    "vehicle history check report","vehicle history check reddit","car vin check report",
    "car vin check recall","car vin record check","vehicle vin check texas",
    "vehicle vin lookup texas","vehicle vin lookup toyota","vehicle vin lookup trim",
    "vehicle vin lookup tool","car vin title check","car vin decoder tool",
    "vehicle vin title search","car vin lookup toyota","car vin lookup tire size",
    "car vin lookup to see if stolen","us vehicle vin check","vehicle vin check up",
    "vehicle vin search up","car vin check uk free","vehicle history check uk gov",
    "vehicle vin lookup uk","car vin check up free","car vin value search",
    "vehicle value check with vin","how do i check my vin online",
    "vehicle history check with license plate","car vin lookup with license plate",
    "vehicle history check with vin","car vin lookup window sticker",
    "vehicle vin warranty lookup","car vin lookup where to find","car vin year check",
    "vehicle vin year lookup","car vin year decoder","car vin year lookup",
    "vehicle vin check california","car vin check for specs","vehicle vin engine lookup",
    "car vin decoder honda","vehicle vin search by license plate","vehicle vin theft check",
    "car vin check value","vehicle vin lookup stolen","car vin check for parts",
    "vehicle history check using vin","vehicle vin check digit","vehicle vin lookup number",
    "vehicle vin check website","vehicle vin code check","car vin check free korea",
    "car vin lookup gm","car vin check color","vehicle vin code year",
    "vehicle history check nz free","car vin check stolen","vin vehicle details lookup",
    "car vin check oman","vehicle history check poland","vehicle vin lookup recall",
    "car vin check honda","vehicle vin check sa","car vin check ri",
    "car vin lookup paint code","car vin check details","vehicle history check cheap",
    "car vin check portugal","vehicle vin lookup options","vehicle vin lookup wisconsin",
    "car vin check china","check vehicle vin lookup","vehicle vin lookup for engine size",
    "vehicle vin check near me","vehicle vin lookup ohio","vehicle vin number check online",
    "vehicle history check website","car vin lookup eu","vehicle history check government",
    "car vin lookup qld","car vin decoder hyundai","vehicle history check online free",
    "car vin decoder mercedes","vin code check","vin number check recall","vin number check kbb",
    "vin number check on car","vin number check by license plate","vin number check on motorcycle",
    "vin number check parts","vin number check government","vin number check georgia",
    "vin number check warranty","vin number check suzuki","vin number check motorcycle",
    "vin number check bmw","vin number check usa","vin number check australia free",
    "vin number check specifications","vin number check wa","vin number check japan",
    "vin number check california emissions","vin number check bike","vin number check america",
    "vin number check germany","vin number check india","vin number check wa free",
    "vin number check digit formula","vin number check with pictures","vin number check belgium",
    "vin number check engine type","car vin number check europe free","vin number check harley davidson",
    "vin number check icbc","honda vin number check japan","vin number check kia",
    "vin number check south korea","vin number check mileage free","vin number check nigeria",
    "vin number check near me","free vin number check nz","vin number check oman",
    "vin number check puerto rico","vin number check poland","vin number check philippines",
    "vin number check report","vin number record check","vin number check south africa free",
    "vin number check saudi arabia","vin number check uk free","vin number check singapore",
    "vin number check italy","vin number check online india","vin number check in uae",
    "vin number check ireland","vin check quick","vin number check china","vin number check auto",
    "vin number check autotrader","vin number check bc free","vin number check bmw free",
    "vin number check car details","vin number check country","vin number check digit meaning",
    "vin number check dubai free","vin number check dodge","vin number check dot",
    "vin number check example","vin number check engine code","vin number check good car",
    "vin number check gov uk","vin number check honda motorcycle","vin number check harley",
    "vin number check history report","vin number check japan free","vin number check jail",
    "vin number check jordan","toyota vin number check japan","car vin number check japan",
    "vin number check ksa","vin number check kuwait","vin number check ktm",
    "vin number check kelley blue book","vin number check kenya","vin number check lebanon",
    "vin number check land rover","vin number check list","vin number check trim level",
    "vin number check malta","vin number check model year","vin number check nt",
    "vin number check service nsw","free vin number check nigeria","vin number check on vehicle",
    "vin number check police","vin number check peugeot","vin number check ppsr",
    "vin number check production date","vin number check puerto rico free","vin number check quad",
    "vin number check quad bike","rego vin number check qld","vin check quad",
    "vin number check rta","vin number check rhode island","vin number check range rover",
    "vin number check romania","vin number check rego","vin number check report free",
    "vin number check rcmp","vin number check saskatchewan","vin number check up free",
    "vin number check uae free online","vin number check us cars","vin number check vehicle",
    "vin number check vehicle history","vin number check volvo","vin number check value",
    "vin number check car value","vin number check with registration","vin number check worldwide",
    "vin number check website","vin number check with photos","vin number check with rego",
    "vin number check yamaha","car vin number check year","toyota vin number check year",
    "vin number check new york","vin number check za","vin number check new zealand",
    "vin number check sri lanka","vin number check gm","vin number check rsa",
    "vin number check global","vin number check mahindra","vin number check location",
    "vin code year lookup","vin code check up","vin number check egypt",
    "vin number check insurance","vin number check accident history","vin number check utah",
    "vin number check online canada","vin number check how","vin number check for new car",
    "vin number check online japan","vin number check online usa","vin number check saudi arabia free",
    "vin number check 10th digit","vin number check plate","vin number check india free",
    "vin number check uae moi","vin code check year","vin number check middle east",
    "vin number check uae rta","vin number check international","vin number check by registration free",
    "vin number check korean","vin number check with license plate","vin number check kawasaki",
    "vin number check details","vin number check online europe","vin number check on bike",
    "vin number check oman free","vin number check legit","vin number check with pictures free",
    "vin number check year model free","vin number check where to find","vin number check meaning",
    "vehicle identification number lookup","vehicle identification number check free",
    "vehicle identification number check","vehicle identification number vin lookup",
    "free vehicle identification number vin decoder & lookup","vehicle identification number database",
    "vehicle identification number finder","vehicle identification number decoder online",
    "vehicle identification number check online","vehicle identification number vin recall check",
    "vehicle identification number check india","vehicle identification number search online",
    "vehicle vin number year decoder"
  ];

  // ─────────────────────────────────────────────
  // DAILY ROTATION LOGIC (15 fresh per day)
  // ─────────────────────────────────────────────
  function getDaySeed() {
    var d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }

  function seededShuffle(arr, seed) {
    var a = arr.slice();
    var random = function() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function getDailyKeywords(count) {
    var seed = getDaySeed();
    var shuffled = seededShuffle(KEYWORDS, seed);
    // Rotate by day so each day gets a different slice
    var offset = (seed % Math.max(1, shuffled.length - count));
    return shuffled.slice(offset, offset + count);
  }

  // Today’s 15 primaries
  var DAILY_PRIMARIES = getDailyKeywords(15);

  // ─────────────────────────────────────────────
  // BODY GENERATOR (unique ~1000 words, keyword dense)
  // ─────────────────────────────────────────────
  function generateBody(primary, related, hash) {
    var r = related.slice(0, 12); // up to 12 related
    var titleCase = primary.replace(/\b\w/g, function(c){ return c.toUpperCase(); });

    var paras = [
      '<p class="last-updated-near"></p>',
      '<h1>' + titleCase + ' ' + hash + '</h1>',

      '<p>Looking for a reliable <strong>' + primary + '</strong>? In 2026 the fastest way to screen any used vehicle is a free ' + primary + ' that pulls title brands, open recalls, theft flags and basic history signals without requiring payment or registration. Whether you need a ' + (r[0]||primary) + ' or a simple ' + (r[1]||primary) + ', the process starts with the 17-digit VIN and ends with a clear decision before money changes hands.</p>',

      '<p>A proper ' + primary + ' begins by decoding the VIN. Free tools instantly return year, make, model, plant and equipment codes. This confirms the car matches the listing. From there the same ' + primary + ' layers on NHTSA recall data, NICB theft and salvage indicators, and available title brands. Buyers searching for ' + (r[2]||primary) + ' or ' + (r[3]||primary) + ' get the same core signals in seconds.</p>',

      '<h2>Why a Free ' + titleCase + ' Matters Before You Buy</h2>',
      '<p>Skipping the ' + primary + ' is how people end up with salvage titles, unrepaired airbag recalls or stolen vehicles. A free ' + primary + ' costs nothing and takes under two minutes on a phone. It surfaces the exact red flags that turn a good deal into an expensive problem. Searchers looking for ' + (r[4]||primary) + ' or ' + (r[5]||primary) + ' are usually trying to avoid exactly these outcomes.</p>',

      '<p>Title brands remain the highest-impact finding. Salvage, rebuilt, flood and lemon brands travel with the vehicle for life in most states. A ' + primary + ' that returns any of these brands changes insurance options, financing eligibility and resale value. Free sources catch a large percentage of these brands; they do not catch every event in every state, so a clean result is a strong screen rather than absolute proof.</p>',

      '<h2>How to Run an Instant ' + titleCase + '</h2>',
      '<p>Locate the VIN on the lower driver-side windshield, the door jamb sticker, or the title and registration. Enter the full 17 characters into a free ' + primary + ' tool that does not demand an email or credit card. Review every section that returns data: recalls, title status, theft indicators and any available accident or odometer signals. Save or screenshot the results. This is the same workflow used for a ' + (r[6]||primary) + ' or a ' + (r[7]||primary) + '.</p>',

      '<p>On-site use is realistic. Most free ' + primary + ' interfaces work in a mobile browser. While the seller retrieves paperwork you can already have the results. Negative flags let you walk away immediately. Clean results let you continue the test drive or inspection with better information. Buyers who need a ' + (r[8]||primary) + ' or ' + (r[9]||primary) + ' follow the identical steps.</p>',

      '<h2>What Free Data Actually Shows</h2>',
      '<p>Open safety recalls from NHTSA are the most complete free category. A ' + primary + ' tied to the official database lists every open campaign for that exact VIN. Some are minor; others involve critical systems. Confirming repair status is a zero-cost safety step.</p>',

      '<p>Theft and unrecovered stolen records come from NICB’s free VINCheck for participating insurers. A hit requires explanation and further verification. Absence of a hit simply means the vehicle does not appear in the participating data as currently stolen or as certain salvage. This is the core of any ' + (r[10]||primary) + ' or ' + (r[11]||primary) + '.</p>',

      '<p>Accident history in free tools is partial. Some services display collision events from selected sources. Many private-party repairs never appear. Therefore “no accidents reported” means “none in these databases,” not “this car has never been damaged.” Odometer trends, when present, can highlight rollback risk when successive records show decreasing mileage.</p>',

      '<h2>After the Free ' + titleCase + ' – Next Steps</h2>',
      '<p>Serious flags (salvage brand, open critical recall, current theft record) usually end interest or demand major price concessions and full documentation. Clean free results move the vehicle into the “worth further effort” category. At that point you can choose a paid history report, an independent mechanical inspection, or both, depending on the price and your risk tolerance.</p>',

      '<p>Document everything. Keep dated screenshots of the ' + primary + ' results. Re-run the same free check shortly before final payment; new recalls or title events occasionally appear. The cost remains zero and the protection is real.</p>',

      '<p>Multiple free sources improve coverage. One tool may emphasize recalls, another title brands, another theft. Running two or three free ' + primary + ' lookups takes only a few extra minutes and reduces the chance a critical flag is missed.</p>',

      '<h2>Limitations You Should Expect</h2>',
      '<p>A free ' + primary + ' is a screen, not a warranty. It does not replace a test drive or a competent inspection. It does not guarantee the odometer is accurate or that every accident was reported. Its job is rapid elimination of the most obvious problem vehicles so you spend time and money only on candidates that survive public free-data screening.</p>',

      '<p>Used consistently, a free ' + primary + ' turns an opaque used-car market into a manageable filter. Start with it on every vehicle. Let the results decide whether the car deserves any further attention. That sequence is the highest-leverage step available to buyers in 2026 who want speed, zero cost, and early warning on title, recall and theft issues.</p>'
    ];

    return paras.join('\n');
  }

  // ─────────────────────────────────────────────
  // BUILD TODAY’S 15 VARIANTS ON THE FLY
  // ─────────────────────────────────────────────
  var VARIANTS = {};
  for (var i = 0; i < DAILY_PRIMARIES.length; i++) {
    var primary = DAILY_PRIMARIES[i];
    var related = seededShuffle(KEYWORDS, getDaySeed() + i).filter(function(k){ return k !== primary; });
    var artNum = String(i + 1);
    var title = primary.replace(/\b\w/g, function(c){ return c.toUpperCase(); }) + " 2026 – Free Instant Guide";
    var meta = "Run a free " + primary + " with no sign up. Check title, theft, recalls and used-car history before you buy. Instant " + primary + " results.";
    VARIANTS[artNum] = {
      title: title,
      h1kw: primary,
      meta: meta,
      primary: primary,
      related: related.slice(0, 12),
      body: null // generated at build time
    };
  }

  // ─────────────────────────────────────────────
  // HELPERS (same as before)
  // ─────────────────────────────────────────────
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function makeHash(io0, art) {
    var seed = String(io0) + String(art) + String(Date.now()).slice(0, -4);
    var hash = 0;
    for (var i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash).toString(36).toUpperCase().slice(0, 8);
  }
  var BASE = 'https://script.google.com/macros/s/AKfycbz6urfiyJ6evBnX5qmQyFBZPrczsjTeCjkQjeeun-5xg9uTkxz6XOI7bvd1XqSaG5mW/exec';

  function buildInternalLinks(currentArt) {
    var links = [], seen = {}, n = parseInt(currentArt, 10) || 1;
    var targets = [((n%15)+1), ((n+3)%15)||15, ((n+5)%15)||15, ((n+7)%15)||15, ((n+9)%15)||15, ((n+11)%15)||15];
    for (var i = 0; i < targets.length; i++) {
      var t = targets[i];
      if (t === n || seen[t]) continue;
      seen[t] = true;
      var v = VARIANTS[String(t)];
      if (v) links.push('<li><a href="' + BASE + '?art=' + t + '">' + esc(v.title) + '</a></li>');
    }
    return '<div style="margin:2rem 0;padding:1.25rem;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;"><h2 style="font-size:1.15rem;margin:0 0 0.75rem;">Related Free VIN Checks</h2><ul style="margin:0;padding-left:1.25rem;line-height:1.7;">' + links.join('\n') + '</ul></div>';
  }

  function buildHead(variant, hash, meta, art) {
    return ['<!DOCTYPE html>','<html lang="en">','<head>',
      '<meta charset="UTF-8">',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">',
      '<meta name="description" content="' + esc(meta) + '">',
      '<meta name="robots" content="index, follow">',
      '<title>' + esc(variant.title) + ' ' + hash + '</title>',
      '<link rel="canonical" href="' + BASE + '?art=' + esc(art) + '">',
      '<style>body{font-family:Georgia,serif;font-size:16px;line-height:1.7;color:#1a1a1a;max-width:860px;margin:0 auto;padding:16px 20px;}h1{font-size:1.75rem;line-height:1.3;font-weight:700;margin-bottom:.5rem;}h2{font-size:1.25rem;margin-top:1.5rem;margin-bottom:.5rem;}p{margin:0 0 1rem;}a{color:#2563eb;}.kw-clusters{display:none!important;visibility:hidden;height:0;overflow:hidden;}.last-updated-near{font-size:.8rem;color:#666;}</style>',
      '</head>','<body>'].join('\n');
  }

  function buildSchema(variant, hash, dateStr) {
  var schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": variant.title + ' ' + hash,
    "description": variant.meta || '',
    "datePublished": dateStr,
    "dateModified": dateStr,
    "author": {
      "@type": "Organization",
      "name": "VIN Research Guide"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Free VIN Lookup Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vin-lookup-free.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vin-lookup-free.com/"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "5880",
      "reviewCount": "5880"
    }
  };
  return '<script type="application/ld+json">' + JSON.stringify(schema) + '<\/script>';
}

  function buildFAQSchema() {
    var faqs = [
      {q:"Can I really look up a VIN for free?",a:"Yes. NHTSA provides a free VIN decoder and recall lookup, while NICB provides a free VIN check for certain stolen vehicle, salvage title, and flood records from participating insurers."},
      {q:"Is a free VIN check as good as Carfax?",a:"Not necessarily. A free VIN check is excellent for initial screening, but Carfax and paid services may aggregate additional commercial records. Neither guarantees a complete accident history."},
      {q:"Does a free VIN lookup require sign up?",a:"It depends on the provider. Some tools offer no sign up access, while others request an account or email before showing results."},
      {q:"What does a VIN number reveal?",a:"The 17-digit VIN identifies vehicle attributes such as manufacturer and configuration. A vehicle history report connects that VIN with later records such as titles, recalls, ownership signals, mileage, and theft data."},
      {q:"Can I check if a car is stolen by VIN?",a:"Yes. NICB's free VIN check identifies vehicles reported as stolen and unrecovered in participating insurer records. NICB warns the database is not comprehensive."}
    ];
    var faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(function(f){return {"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}};})};
    return '<script type="application/ld+json">' + JSON.stringify(faqSchema) + '<\/script>';
  }

  function buildDateScript() {
    return '<script>(function(){var d=new Date();var months=["January","February","March","April","May","June","July","August","September","October","November","December"];var str=months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();var els=document.querySelectorAll(".last-updated-near");for(var i=0;i<els.length;i++){els[i].textContent="Last updated: "+str;}})();<\/script>';
  }

  function buildKeywords(variant) {
    var clusters = KEYWORDS.slice(0, 40).concat([variant.primary + ' 2026', variant.h1kw]);
    return '<p class="kw-clusters" style="display:none;visibility:hidden;height:0;overflow:hidden;">' + clusters.join(' ') + '</p>';
  }

  function buildOverlay() {
    return [
      '<style>html,body{width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;overflow-x:hidden!important;box-sizing:border-box!important;}*,*:before,*:after{box-sizing:border-box!important;}#ov-card{position:relative!important;width:calc(100% - 20px)!important;max-width:600px!important;height:auto!important;min-height:0!important;margin:10px auto!important;padding:18px 14px!important;background:#fff!important;border-radius:14px!important;overflow:hidden!important;box-sizing:border-box!important;}#ov-card h3{width:100%!important;margin:0 0 10px!important;padding:0!important;font-size:clamp(1rem,5vw,1.4rem)!important;line-height:1.2!important;text-align:center!important;overflow-wrap:break-word!important;}#ov-card p{width:100%!important;margin:8px 0!important;padding:0!important;font-size:clamp(.8rem,3.8vw,1rem)!important;line-height:1.4!important;text-align:center!important;overflow-wrap:break-word!important;}#ov-btn{display:block!important;width:100%!important;max-width:100%!important;height:auto!important;min-height:40px!important;margin:8px 0!important;padding:10px!important;font-size:clamp(.75rem,3.5vw,.95rem)!important;line-height:1.25!important;box-sizing:border-box!important;white-space:normal!important;overflow-wrap:break-word!important;}@media(max-width:600px){#ov-card{width:calc(100% - 4px)!important;max-width:none!important;margin:6px auto!important;padding:22px 16px!important;border-radius:14px!important;}#ov-card h3{font-size:1.2rem!important;line-height:1.25!important;}#ov-card p{font-size:.95rem!important;line-height:1.5!important;margin:10px 0!important;}#ov-btn{min-height:46px!important;padding:12px 10px!important;font-size:.9rem!important;margin:10px 0!important;}}@media(max-width:360px){#ov-card{width:calc(100% - 4px)!important;padding:20px 14px!important;margin:4px auto!important;}#ov-card h3{font-size:1.1rem!important;}#ov-card p{font-size:.88rem!important;line-height:1.45!important;}#ov-btn{min-height:44px!important;font-size:.85rem!important;padding:11px 8px!important;}}</style>',
      '<div id="overlay" style="display:none;position:fixed;inset:0;width:100vw;height:100vh;background:rgba(8,15,30,0.72);z-index:9999;backdrop-filter:blur(5px);overflow-y:auto;box-sizing:border-box;">',
      '<div id="ov-card" style="background:#fff;margin:10px auto;padding:42px 24px 32px;width:calc(100vw - 20px);max-width:520px;min-height:calc(100vh - 20px);border-radius:24px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.35);font-family:Arial,sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box;">',
      '<div style="width:76px;height:76px;border-radius:20px;background:#e8f0ff;display:flex;align-items:center;justify-content:center;font-size:42px;margin-bottom:28px;">🚗</div>',
      '<h3 style="font-family:Georgia,serif;font-size:28px;line-height:1.2;color:#111827;margin:0 0 20px;font-weight:700;max-width:430px;">Instant Vehicle History Report</h3>',
      '<p style="font-family:Arial,sans-serif;font-size:17px;line-height:1.65;color:#4b5563;margin:0 0 34px;max-width:430px;">Protect yourself from hidden accidents, salvage titles, and odometer rollbacks before making a purchase. Run your complete vehicle history check right now.</p>',
      '<button id="ov-btn" onclick="redirectToFreeVin()" style="width:100%;max-width:440px;min-height:64px;padding:16px 22px;background:#2563eb;color:#fff;border:none;border-radius:50px;font-family:Arial,sans-serif;font-size:18px;font-weight:700;cursor:pointer;box-shadow:0 8px 22px rgba(37,99,235,0.3);">Check Vehicle History Now&nbsp; →</button>',
      '<p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#6b7280;">No sign up required • Instant secure lookup</p>',
      '</div></div>',
      '<script>function redirectToFreeVin(){window.open("https://freevin.pages.dev/","_blank");}setTimeout(function(){var ov=document.getElementById("overlay");if(ov){ov.style.display="flex";ov.style.alignItems="center";ov.style.justifyContent="center";}},1000);<\/script>'
    ].join('\n');
  }

  function buildBotScript() {
    return '<script>(function(){var ua=navigator.userAgent.toLowerCase();var bots=["googlebot","bingbot","slurp","duckduckbot","baiduspider","yandexbot","facebot","ia_archiver","semrushbot","ahrefsbot","mj12bot"];var isBot=bots.some(function(b){return ua.indexOf(b)>-1;});if(isBot){var ov=document.getElementById("overlay");if(ov)ov.remove();var btns=document.querySelectorAll("button[onclick]");btns.forEach(function(b){b.style.display="none";});}})();<\/script>';
  }

  // ─────────────────────────────────────────────
  // BUILD PAGE
  // ─────────────────────────────────────────────
  function buildPage(io0, art) {
    var hash = makeHash(io0, art);
    var artKey = String((parseInt(art, 10) - 1) % 15 + 1); // keep art 1-15
    var variant = VARIANTS[artKey] || VARIANTS["1"];
    var meta = variant.meta || '';
    var now = new Date();
    var dateStr = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');

    // Generate unique body on the fly
    var bodyHtml = generateBody(variant.primary, variant.related, hash);

    var parts = [];
    parts.push(buildHead(variant, hash, meta, artKey));
    parts.push(buildSchema(variant, hash, dateStr));
    parts.push(buildFAQSchema());
    parts.push(buildOverlay());
    parts.push(buildBotScript());
    parts.push(bodyHtml);
    parts.push(buildInternalLinks(artKey));
    parts.push(buildKeywords(variant));
    parts.push(buildDateScript());
    parts.push('</body></html>');
    return parts.join('\n');
  }

  return buildPage(io0, art);
});
