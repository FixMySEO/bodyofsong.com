// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.bodyofsong.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.bodyofsong.com","title_tag":"Singing Workshops & Wellbeing Experiences | BodyofSong","meta_description":"Wellbeing choirs, community singing and singing workshops for health, joy and connection. Workplace wellbeing, team building experiences and retreats with BodyofSong."},{"page_url":"https://www.bodyofsong.com/about-molly-king","title_tag":"Singing for Wellbeing & Group Voice Therapy | BodyofSong","meta_description":"Trauma-informed facilitator offering singing for health, breathwork techniques and group voice therapy. Discover community singing and emotional expression with BodyofSong."},{"page_url":"https://www.bodyofsong.com/wild-voices-drop-in-choir","title_tag":"Community Singing & Vocal Harmony Arrangements | BodyofSong","meta_description":"Join Wild Voices drop-in choirs for community singing, vocal harmony arrangements and emotional expression. Inclusive group singing for wellbeing—no experience needed."},{"page_url":"https://www.bodyofsong.com/retreats","title_tag":"Wellbeing Retreats & Singing for Wellbeing | BodyofSong","meta_description":"Wellbeing singing retreats with breathwork techniques, vocal harmony and group voice therapy-inspired practices. Singing for health, relaxation and emotional expression."},{"page_url":"https://www.bodyofsong.com/festival-singing-workshops","title_tag":"Festival Singing Workshops & Pop-up Choirs | BodyofSong","meta_description":"Festival singing workshops with pop-up choirs, community singing and vocal harmony arrangements. Singing for wellbeing and emotional expression at your festival or event."},{"page_url":"https://www.bodyofsong.com/wellbeing-singing-workshops","title_tag":"Team Building Experiences & Workplace Wellbeing | BodyofSong","meta_description":"Workplace wellbeing singing workshops and team building experiences. Singing for wellbeing, emotional expression and connection, using breathwork techniques and group songs."},{"page_url":"https://www.bodyofsong.com/workplace-choirs-for-staff-wellbeing","title_tag":"Workplace Choirs & Singing for Health | BodyofSong","meta_description":"Workplace choirs that support workplace wellbeing, singing for health and staff connection. Regular singing workshops boost mood, reduce stress and build vocal harmony."},{"page_url":"https://www.bodyofsong.com/whats-on-book-online-today","title_tag":"Singing Workshops & Wellbeing Experiences | BodyofSong","meta_description":"Book singing workshops, community singing events and wellbeing retreats. Pop-up choirs, festival sessions and team building experiences focused on singing for wellbeing."},{"page_url":"https://www.bodyofsong.com/testimonials","title_tag":"Singing for Wellbeing & Workplace Choirs Reviews | BodyofSong","meta_description":"Read testimonials for workplace choirs, singing workshops and wellbeing retreats. Discover how singing for wellbeing supports health, emotional expression and connection."}],"keywords":["singing workshops","workplace choirs","pop-up choirs","workplace wellbeing","community singing","breathwork techniques","group voice therapy","emotional expression","wellbeing retreats","team building experiences","vocal harmony arrangements","singing for health","singing for wellbeing","wellbeing experiences"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.bodyofsong.com/#organization",
  "name": "BodyofSong",
  "url": "https://www.bodyofsong.com/",
  "description": "BodyofSong offers wellbeing choirs, singing workshops, retreats, festival singing workshops and workplace choirs that promote health, connection and joy through group singing, breath-work and vocal harmony.",
  "email": "Breathvoicebodysong@gmail.com",
  "telephone": "07974138739",
  "image": [
    "https://static.wixstatic.com/media/f1c25c_e69b6ec0fab348099eb0e9262313ffec~mv2.jpg/v1/fill/w_147,h_71,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/f1c25c_e69b6ec0fab348099eb0e9262313ffec~mv2.jpg",
    "https://static.wixstatic.com/media/f1c25c_4bcb0e02fb014387b3af7df03932c4a0~mv2.jpg/v1/crop/x_0,y_24,w_759,h_710/fill/w_297,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/48367528_10161135143235305_2676708019269533696_n.jpg",
    "https://static.wixstatic.com/media/f1c25c_bd83007682ce44bea264d237fa1333ee~mv2.jpg/v1/crop/x_101,y_0,w_822,h_768/fill/w_297,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2023-12-16-18-19-20%202_edited.jpg",
    "https://static.wixstatic.com/media/f1c25c_6bd7400c362143258fe5e1e42ce0bead~mv2.jpg/v1/crop/x_585,y_0,w_4122,h_3840/fill/w_297,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/RXWNPA.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/f1c25c_441fa7817f7047b1ab167cb943961ee3%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f1c25c_441fa7817f7047b1ab167cb943961ee3%7Emv2.jpg",
  "sameAs": [],
  "founder": {
    "@type": "Person",
    "name": "Molly Miranda King",
    "description": "Trauma-informed workshop facilitator specialising in singing, choral harmony and breath-work that promotes wellbeing through voice and body."
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "Breathvoicebodysong@gmail.com",
    "telephone": "07974138739",
    "availableLanguage": "en"
  },
  "offers": [
    {
      "@type": "Service",
      "name": "Wild Voices Drop-In Choirs",
      "description": "Drop-in wellbeing choirs focusing on vocal meditation, warm ups, improvisation and close vocal harmony to support health, connection and joy.",
      "url": "https://www.bodyofsong.com/wild-voices-drop-in-choir"
    },
    {
      "@type": "Service",
      "name": "Wellbeing Singing Retreats",
      "description": "Weekend wellbeing singing retreats in the Brecon Beacons featuring harmony singing, vocal improvisation, breath-work and vocal sound baths.",
      "url": "https://www.bodyofsong.com/retreats"
    },
    {
      "@type": "Service",
      "name": "Festival Singing Workshops",
      "description": "Bespoke festival singing workshops including group harmony singing, campfire circle singing, jazz and blues improvisation and wellbeing singing.",
      "url": "https://www.bodyofsong.com/festival-singing-workshops"
    },
    {
      "@type": "Service",
      "name": "Team Building Wellbeing Singing Experiences",
      "description": "Corporate wellbeing singing workshops for teams, designed to strengthen connection, reduce stress and boost mood through group singing.",
      "url": "https://www.bodyofsong.com/wellbeing-singing-workshops"
    },
    {
      "@type": "Service",
      "name": "Workplace Choirs",
      "description": "Regular workplace choirs for staff wellbeing, improving focus, connection and resilience through weekly group singing sessions.",
      "url": "https://www.bodyofsong.com/workplace-choirs-for-staff-wellbeing"
    },
    {
      "@type": "Service",
      "name": "Public Workshops and Events",
      "description": "Public singing workshops, events and retreats designed to nurture wellbeing and connection through group singing.",
      "url": "https://www.bodyofsong.com/whats-on-book-online-today"
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
