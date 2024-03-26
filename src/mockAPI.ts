export const movieDetails = {
  short: {
    "@context": "https://schema.org",
    "@type": "TVSeries",
    url: "https://www.imdb.com/title/tt2356777/",
    name: "True Detective",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTEzMzBiNGYtYThiZS00MzBjLTk5ZWItM2FmMzU3Y2RjYTVlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    description:
      "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
    review: {
      "@type": "Review",
      itemReviewed: {
        "@type": "TVSeries",
        url: "https://www.imdb.com/title/tt2356777/",
      },
      author: {
        "@type": "Person",
        name: "ricochet93-369-308802",
      },
      dateCreated: "2019-01-04",
      inLanguage: "English",
      name: "Season One is Perfection",
      reviewBody:
        "Season one is a beautiful thing.\n\nThen Vince Vaughan happened and the less said about that the better.",
      reviewRating: {
        "@type": "Rating",
        worstRating: 1,
        bestRating: 10,
        ratingValue: 10,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingCount: 651810,
      bestRating: 10,
      worstRating: 1,
      ratingValue: 8.9,
    },
    contentRating: "18",
    genre: ["Crime", "Drama", "Mystery"],
    datePublished: "2014-02-22",
    keywords:
      "southern gothic,murder,police detective,police investigation,female full frontal nudity",
    actor: [
      {
        "@type": "Person",
        url: "https://www.imdb.com/name/nm0000681/",
        name: "Vince Vaughn",
      },
      {
        "@type": "Person",
        url: "https://www.imdb.com/name/nm0268199/",
        name: "Colin Farrell",
      },
      {
        "@type": "Person",
        url: "https://www.imdb.com/name/nm1046097/",
        name: "Rachel McAdams",
      },
    ],
    creator: [
      {
        "@type": "Organization",
        url: "https://www.imdb.com/company/co0017525/",
      },
      {
        "@type": "Organization",
        url: "https://www.imdb.com/company/co0284741/",
      },
      {
        "@type": "Organization",
        url: "https://www.imdb.com/company/co0176737/",
      },
      {
        "@type": "Person",
        url: "https://www.imdb.com/name/nm4446305/",
        name: "Nic Pizzolatto",
      },
      {
        "@type": "Person",
        url: "https://www.imdb.com/name/nm0411517/",
        name: "Issa López",
      },
    ],
    trailer: {
      "@type": "VideoObject",
      name: "Season Finale Preview",
      embedUrl: "https://www.imdb.com/video/imdb/vi1823852057",
      thumbnail: {
        "@type": "ImageObject",
        contentUrl:
          "https://m.media-amazon.com/images/M/MV5BNWRmYjkzZjEtMTljMC00YTQ0LTk1N2MtZDM1ODdjY2UyMDJkXkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg",
      },
      thumbnailUrl:
        "https://m.media-amazon.com/images/M/MV5BNWRmYjkzZjEtMTljMC00YTQ0LTk1N2MtZDM1ODdjY2UyMDJkXkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg",
      url: "https://www.imdb.com/video/vi1823852057/",
      description:
        "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
      duration: "PT46S",
      uploadDate: "2024-02-19T12:08:10.910Z",
    },
  },
  imdbId: "tt2356777",
  top: {
    id: "tt2356777",
    productionStatus: {
      currentProductionStage: {
        id: "released",
        text: "Released",
        __typename: "ProductionStage",
      },
      productionStatusHistory: [
        {
          status: {
            id: "pitch",
            text: "Pitch",
            __typename: "ProductionStatus",
          },
          __typename: "ProductionStatusHistory",
        },
        {
          status: {
            id: "pre_production",
            text: "Pre-production",
            __typename: "ProductionStatus",
          },
          __typename: "ProductionStatusHistory",
        },
        {
          status: {
            id: "pre_production",
            text: "Pre-production",
            __typename: "ProductionStatus",
          },
          __typename: "ProductionStatusHistory",
        },
        {
          status: {
            id: "filming",
            text: "Filming",
            __typename: "ProductionStatus",
          },
          __typename: "ProductionStatusHistory",
        },
        {
          status: {
            id: "released",
            text: "Released",
            __typename: "ProductionStatus",
          },
          __typename: "ProductionStatusHistory",
        },
      ],
      restriction: null,
      __typename: "ProductionStatusDetails",
    },
    canHaveEpisodes: true,
    series: null,
    titleText: {
      text: "True Detective",
      __typename: "TitleText",
    },
    titleType: {
      displayableProperty: {
        value: {
          plainText: "TV Series",
          __typename: "Markdown",
        },
        __typename: "DisplayableTitleTypeProperty",
      },
      text: "TV Series",
      id: "tvSeries",
      isSeries: true,
      isEpisode: false,
      categories: [
        {
          value: "tv",
          __typename: "TitleTypeCategory",
        },
      ],
      canHaveEpisodes: true,
      __typename: "TitleType",
    },
    originalTitleText: {
      text: "True Detective",
      __typename: "TitleText",
    },
    certificate: {
      rating: "18",
      __typename: "Certificate",
    },
    releaseYear: {
      year: 2014,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: {
      day: 22,
      month: 2,
      year: 2014,
      __typename: "ReleaseDate",
    },
    runtime: {
      seconds: 3600,
      displayableProperty: {
        value: {
          plainText: "1h",
          __typename: "Markdown",
        },
        __typename: "DisplayableTitleRuntimeProperty",
      },
      __typename: "Runtime",
    },
    canRate: {
      isRatable: true,
      __typename: "CanRate",
    },
    ratingsSummary: {
      aggregateRating: 8.9,
      voteCount: 651810,
      __typename: "RatingsSummary",
    },
    meterRanking: {
      currentRank: 11,
      rankChange: {
        changeDirection: "DOWN",
        difference: 5,
        __typename: "MeterRankChange",
      },
      __typename: "TitleMeterRanking",
    },
    primaryImage: {
      id: "rm3969993729",
      width: 2025,
      height: 3000,
      url: "https://m.media-amazon.com/images/M/MV5BNTEzMzBiNGYtYThiZS00MzBjLTk5ZWItM2FmMzU3Y2RjYTVlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      caption: {
        plainText: "Jodie Foster and Kali Reis in True Detective (2014)",
        __typename: "Markdown",
      },
      __typename: "Image",
    },
    images: {
      total: 1342,
      edges: [
        {
          node: {
            id: "rm2030714881",
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
      ],
      __typename: "ImageConnection",
    },
    videos: {
      total: 45,
      __typename: "TitleRelatedVideosConnection",
    },
    primaryVideos: {
      edges: [
        {
          node: {
            id: "vi1823852057",
            createdDate: "2024-02-19T12:08:10.910Z",
            isMature: false,
            runtime: {
              value: 46,
              __typename: "VideoRuntime",
            },
            name: {
              value: "Season Finale Preview",
              language: "en",
              __typename: "LocalizedString",
            },
            description: {
              value:
                "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
              language: "en",
              __typename: "LocalizedString",
            },
            timedTextTracks: [],
            recommendedTimedTextTrack: null,
            thumbnail: {
              url: "https://m.media-amazon.com/images/M/MV5BNWRmYjkzZjEtMTljMC00YTQ0LTk1N2MtZDM1ODdjY2UyMDJkXkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg",
              height: 1080,
              width: 1920,
              __typename: "Thumbnail",
            },
            primaryTitle: {
              id: "tt2356777",
              titleText: {
                text: "True Detective",
                __typename: "TitleText",
              },
              originalTitleText: {
                text: "True Detective",
                __typename: "TitleText",
              },
              releaseYear: {
                year: 2014,
                __typename: "YearRange",
              },
              __typename: "Title",
            },
            playbackURLs: [
              {
                displayName: {
                  value: "480p",
                  language: "en-US",
                  __typename: "LocalizedString",
                },
                videoMimeType: "MP4",
                videoDefinition: "DEF_480p",
                url: "https://imdb-video.media-imdb.com/vi1823852057/1434659607842-pgv4ql-1708344491158.mp4?Expires=1711553689&Signature=T~eHxRqXrFM45hW5Wy3xxoiG5v3dPQAUKlCn9fkrVbK6R-ErLFFTYzb9X0u72GsR0VYSuC4oIZbqqSxUurpSD94r0h50bslaQhhZaCDFgqBZNuIDSHrmKYnHexmDsveoP0sCyPcjp7Ccdiy37~dKQG-t3TDaZ~YQIKUvFD1yZe~zez1mTqG0cgRRGwwOr4XP69ESMwPWBOepBRJamIApZ5I~Ic8VFrfBL3PZ4~asmBDb6smlAJEDFL5qids7tNU8aDqVqgdxLozcmRhx2C3~5EdNLoLDPGHJGlPDWcGCSIASMXBi9aAAeZeiiay3Cmq5vanzjeJWoID4ZXvMYMVbDQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
                __typename: "PlaybackURL",
              },
              {
                displayName: {
                  value: "SD",
                  language: "en-US",
                  __typename: "LocalizedString",
                },
                videoMimeType: "MP4",
                videoDefinition: "DEF_SD",
                url: "https://imdb-video.media-imdb.com/vi1823852057/1434659454657-dx9ykf-1708344491158.mp4?Expires=1711553689&Signature=dVNVR1bd46FdU5-IWiUFBjvTshn14ESSnJmKQmgXnlcQeXKnN3DebGTOl2CpZ3lmsPTGeEcXdecDnYDSpd5rvMOuXJPaDSC70L~0EHsfjp1h~i9LwDlPrKoNTjbtCVcgrdAdkAswxBDgZCL~05M9fQfdZrLIXNdTqQQ9tUsa9g8DCWk280hzArnEWa6tiuUSL1ufIjcmfFL2Zly7cnLjrKaMmG5mLWq4LP4a~oFANPXq6W4KOSrWPH~2uqIPhOs7YhTGFPkyAyV3Zn7YVKa~Ll7KHH8fe37gQnz8SkDk7vGXOpdD8WDsz-vJbrg5snffDWVLwsTtLOgZ6dCZWet~cQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
                __typename: "PlaybackURL",
              },
            ],
            contentType: {
              id: "amzn1.imdb.video.contenttype.trailer",
              displayName: {
                value: "Trailer",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            previewURLs: [
              {
                displayName: {
                  value: "AUTO",
                  language: "en-US",
                  __typename: "LocalizedString",
                },
                videoMimeType: "M3U8",
                videoDefinition: "DEF_AUTO",
                url: "https://imdb-video.media-imdb.com/vi1823852057/hls-preview-ee842f4e-ad72-44dd-be7f-3387c75e14b6.m3u8?Expires=1711553689&Signature=hpmww-n9Qsv1Mcb5d8P-3ulM-SGYomyl5Btx0UgE-yNCJqI1-RDy6DYLPqr6z3QLqo6wQq9D9qccMMlriNuU5Wcob46zJ6OAdn5O0A9g-AmVPw5M13h~jQ0jt7jeq5yNePcLwBRyop5jp1~wZ6F8-vgKKPIga7JkMN9ENU0WZxQYDDdvboK6b-hl-jm03BcwYKCZwo~znjS5-VWXk2zO6cEIEM9CmhT5~fU7BLIWfCSNtgdcvaAdzpivLvEEJvG4N8n~a~SITB2obk89rY2CvZKINNBuNGBJ5Wfuz3MpauqjLtIvelV1rA5xQHP4Aqk84Ce2lp5DNr2qEAXmJPWm7g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
                __typename: "PlaybackURL",
              },
            ],
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi2561984025",
            createdDate: "2024-02-18T16:57:31.903Z",
            isMature: false,
            runtime: {
              value: 43,
              __typename: "VideoRuntime",
            },
            name: {
              value: "Finale Trailer",
              language: "en",
              __typename: "LocalizedString",
            },
            description: {
              value: "",
              language: "en",
              __typename: "LocalizedString",
            },
            timedTextTracks: [],
            recommendedTimedTextTrack: null,
            thumbnail: {
              url: "https://m.media-amazon.com/images/M/MV5BMmUxYTViZWYtZWViYi00OGMxLWJmMTItZDg2NDVkYTk5ZmRjXkEyXkFqcGdeQWFkcmllY2xh._V1_.jpg",
              height: 919,
              width: 1633,
              __typename: "Thumbnail",
            },
            primaryTitle: {
              id: "tt2356777",
              titleText: {
                text: "True Detective",
                __typename: "TitleText",
              },
              originalTitleText: {
                text: "True Detective",
                __typename: "TitleText",
              },
              releaseYear: {
                year: 2014,
                __typename: "YearRange",
              },
              __typename: "Title",
            },
            playbackURLs: [
              {
                displayName: {
                  value: "480p",
                  language: "en-US",
                  __typename: "LocalizedString",
                },
                videoMimeType: "MP4",
                videoDefinition: "DEF_480p",
                url: "https://imdb-video.media-imdb.com/vi2561984025/1434659607842-pgv4ql-1708275452196.mp4?Expires=1711553689&Signature=GWvAOXz7EBTuANX1FxxXjXpvLa9bMlES-2UqAnaLJIuSXLjn2-gcmsDMgbvR57jiz2y3sp3VLxN1EeeEHwdMjZC4ZOPTQgpgW46abNX2e~ObIzqs1ZzdHsSFAyjASRq8YI9AX3j2a17x6FZGkzGEs9g85yb2DXXG-LZ3pO9q490Dl-TG15Ookhj5rlrtSC~EHXwEWIndBYS4KCzRS3mAjuYAx8GapeYz7YVWUMDf3mPxs~3SgRPd58co6YlbY1IZyqZgTmTtBRhmzZXT2YNx7XVo1xqCUSlEHNyvTY0IUx3VfaIR~epAiKnA33v4b1rIiTgmw0eiDRLQ~tL457pxZg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
                __typename: "PlaybackURL",
              },
              {
                displayName: {
                  value: "SD",
                  language: "en-US",
                  __typename: "LocalizedString",
                },
                videoMimeType: "MP4",
                videoDefinition: "DEF_SD",
                url: "https://imdb-video.media-imdb.com/vi2561984025/1434659454657-dx9ykf-1708275452196.mp4?Expires=1711553689&Signature=k9MBb9Qnp5kq-tP~gWgY4thccJqm72bhxrj0Fb5DU9IOc~r5C9GsgeJ71yen1Yxc8hYrhbEroIe-avDtvFmWERI43KZ4eucESZ95cxWUTKXOe8kL5b6ZY1lEfzsOWh2sZCpJ9IM2x9m2nvquAyFlLAPIXiemJZKVeqPs~4QUN539xbB5oMilL0veakAoJeGN45KKzL6-rAUyBHv4QKcYxRBNxr0VmjGZrPiknx1WMaYl6l2cFVsjSXMWt0cD-StLjaQDJ5OZfCDNe9Ytz4-Q2-WqbAoAC1QxG-mdsHWxt-JhO1v-df4VC6OFjZWZKM0VjRMZSPyPutH1Ql1yY64jWg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
                __typename: "PlaybackURL",
              },
            ],
            contentType: {
              id: "amzn1.imdb.video.contenttype.trailer",
              displayName: {
                value: "Trailer",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            previewURLs: [
              {
                displayName: {
                  value: "AUTO",
                  language: "en-US",
                  __typename: "LocalizedString",
                },
                videoMimeType: "M3U8",
                videoDefinition: "DEF_AUTO",
                url: "https://imdb-video.media-imdb.com/vi2561984025/hls-preview-d4128b28-d17f-40f9-bc54-ce85a7b9e312.m3u8?Expires=1711553689&Signature=GLuUcvLYf5vUu9IacpycF5Py3ECPxGGQwCCfSEWLYc1~gRMqWtmJB5axln7s7QRCH18UbsxaU08aQMvQruG5zwMM8lrS7neFXAYj6LricBMpVNPle3DsZ31AUjERSFuaECbDGpZuHIKmqnKLfqhzgPa0R6Av2-XVFgcS0Y8er1LF4Za1i-JBkpxRmVh0npQB5bD5x4i7YbmGwhcHz3ui0V3MvQSOlxEEWfK9HEWeYuP6eraC6EVKEciCl~AenrxvftXIe3fwW5DRswSKiBJzW2d5Pg~xB2bc3gz5eCAv22ZbixioIWE2Ij~442WeBrvL2~Z~AXnfxnMjhZCaKsif6g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
                __typename: "PlaybackURL",
              },
            ],
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
      ],
      __typename: "VideoConnection",
    },
    externalLinks: {
      total: 294,
      __typename: "ExternalLinkConnection",
    },
    metacritic: null,
    keywords: {
      total: 71,
      edges: [
        {
          node: {
            text: "southern gothic",
            __typename: "TitleKeyword",
          },
          __typename: "TitleKeywordEdge",
        },
        {
          node: {
            text: "murder",
            __typename: "TitleKeyword",
          },
          __typename: "TitleKeywordEdge",
        },
        {
          node: {
            text: "police detective",
            __typename: "TitleKeyword",
          },
          __typename: "TitleKeywordEdge",
        },
        {
          node: {
            text: "police investigation",
            __typename: "TitleKeyword",
          },
          __typename: "TitleKeywordEdge",
        },
        {
          node: {
            text: "female full frontal nudity",
            __typename: "TitleKeyword",
          },
          __typename: "TitleKeywordEdge",
        },
      ],
      __typename: "TitleKeywordConnection",
    },
    genres: {
      genres: [
        {
          text: "Crime",
          id: "Crime",
          __typename: "Genre",
        },
        {
          text: "Drama",
          id: "Drama",
          __typename: "Genre",
        },
        {
          text: "Mystery",
          id: "Mystery",
          __typename: "Genre",
        },
        {
          text: "Thriller",
          id: "Thriller",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    plot: {
      plotText: {
        plainText:
          "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
        __typename: "Markdown",
      },
      language: {
        id: "en-US",
        __typename: "DisplayableLanguage",
      },
      __typename: "Plot",
    },
    plotContributionLink: {
      url: "https://contribute.imdb.com/updates?update=tt2356777:outlines.add.1.locale~en-US",
      __typename: "ContributionLink",
    },
    credits: {
      total: 2554,
      __typename: "CreditConnection",
    },
    principalCredits: [
      {
        totalCredits: 8,
        category: {
          text: "Creators",
          id: "creator",
          __typename: "CreditCategory",
        },
        credits: [
          {
            name: {
              nameText: {
                text: "Nic Pizzolatto",
                __typename: "NameText",
              },
              id: "nm4446305",
              __typename: "Name",
            },
            attributes: null,
            __typename: "Crew",
          },
          {
            name: {
              nameText: {
                text: "Issa López",
                __typename: "NameText",
              },
              id: "nm0411517",
              __typename: "Name",
            },
            attributes: null,
            __typename: "Crew",
          },
        ],
        __typename: "PrincipalCreditsForCategory",
      },
      {
        totalCredits: 569,
        category: {
          text: "Stars",
          id: "cast",
          __typename: "CreditCategory",
        },
        credits: [
          {
            name: {
              nameText: {
                text: "Vince Vaughn",
                __typename: "NameText",
              },
              id: "nm0000681",
              __typename: "Name",
            },
            attributes: null,
            __typename: "Cast",
          },
          {
            name: {
              nameText: {
                text: "Colin Farrell",
                __typename: "NameText",
              },
              id: "nm0268199",
              __typename: "Name",
            },
            attributes: null,
            __typename: "Cast",
          },
          {
            name: {
              nameText: {
                text: "Rachel McAdams",
                __typename: "NameText",
              },
              id: "nm1046097",
              __typename: "Name",
            },
            attributes: null,
            __typename: "Cast",
          },
        ],
        __typename: "PrincipalCreditsForCategory",
      },
    ],
    reviews: {
      total: 1343,
      __typename: "ReviewsConnection",
    },
    criticReviewsTotal: {
      total: 235,
      __typename: "ExternalLinkConnection",
    },
    triviaTotal: {
      total: 57,
      __typename: "TriviaConnection",
    },
    engagementStatistics: {
      watchlistStatistics: {
        displayableCount: {
          text: "Added by 800K users",
          __typename: "LocalizedDisplayableCount",
        },
        __typename: "WatchlistStatistics",
      },
      __typename: "EngagementStatistics",
    },
    subNavCredits: {
      total: 2554,
      __typename: "CreditConnection",
    },
    subNavReviews: {
      total: 1343,
      __typename: "ReviewsConnection",
    },
    subNavTrivia: {
      total: 57,
      __typename: "TriviaConnection",
    },
    subNavFaqs: {
      total: 11,
      __typename: "FaqConnection",
    },
    subNavTopQuestions: {
      total: 19,
      __typename: "AlexaQuestionConnection",
    },
    titleGenres: {
      genres: [
        {
          genre: {
            text: "Crime",
            __typename: "GenreItem",
          },
          __typename: "TitleGenre",
        },
        {
          genre: {
            text: "Drama",
            __typename: "GenreItem",
          },
          __typename: "TitleGenre",
        },
        {
          genre: {
            text: "Mystery",
            __typename: "GenreItem",
          },
          __typename: "TitleGenre",
        },
      ],
      __typename: "TitleGenres",
    },
    meta: {
      canonicalId: "tt2356777",
      publicationStatus: "PUBLISHED",
      __typename: "TitleMeta",
    },
    castPageTitle: {
      edges: [
        {
          node: {
            name: {
              id: "nm0000190",
              nameText: {
                text: "Matthew McConaughey",
                __typename: "NameText",
              },
              __typename: "Name",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0268199",
              nameText: {
                text: "Colin Farrell",
                __typename: "NameText",
              },
              __typename: "Name",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0991810",
              nameText: {
                text: "Mahershala Ali",
                __typename: "NameText",
              },
              __typename: "Name",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0000437",
              nameText: {
                text: "Woody Harrelson",
                __typename: "NameText",
              },
              __typename: "Name",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
      ],
      __typename: "CreditConnection",
    },
    creatorsPageTitle: [
      {
        credits: [
          {
            name: {
              id: "nm4446305",
              nameText: {
                text: "Nic Pizzolatto",
                __typename: "NameText",
              },
              __typename: "Name",
            },
            __typename: "Crew",
          },
          {
            name: {
              id: "nm0411517",
              nameText: {
                text: "Issa López",
                __typename: "NameText",
              },
              __typename: "Name",
            },
            __typename: "Crew",
          },
        ],
        __typename: "PrincipalCreditsForCategory",
      },
    ],
    directorsPageTitle: [],
    countriesOfOrigin: {
      countries: [
        {
          id: "US",
          __typename: "CountryOfOrigin",
        },
      ],
      __typename: "CountriesOfOrigin",
    },
    production: {
      edges: [
        {
          node: {
            company: {
              id: "co0017525",
              companyText: {
                text: "Anonymous Content",
                __typename: "CompanyText",
              },
              __typename: "Company",
            },
            __typename: "CompanyCredit",
          },
          __typename: "CompanyCreditEdge",
        },
        {
          node: {
            company: {
              id: "co0284741",
              companyText: {
                text: "HBO Entertainment",
                __typename: "CompanyText",
              },
              __typename: "Company",
            },
            __typename: "CompanyCredit",
          },
          __typename: "CompanyCreditEdge",
        },
        {
          node: {
            company: {
              id: "co0176737",
              companyText: {
                text: "Passenger",
                __typename: "CompanyText",
              },
              __typename: "Company",
            },
            __typename: "CompanyCredit",
          },
          __typename: "CompanyCreditEdge",
        },
      ],
      __typename: "CompanyCreditConnection",
    },
    featuredReviews: {
      edges: [
        {
          node: {
            author: {
              nickName: "ricochet93-369-308802",
              __typename: "UserProfile",
            },
            summary: {
              originalText: "Season One is Perfection",
              __typename: "ReviewSummary",
            },
            text: {
              originalText: {
                plainText:
                  "Season one is a beautiful thing.\n\nThen Vince Vaughan happened and the less said about that the better.",
                __typename: "Markdown",
              },
              __typename: "ReviewText",
            },
            authorRating: 10,
            submissionDate: "2019-01-04",
            __typename: "Review",
          },
          __typename: "ReviewEdge",
        },
      ],
      __typename: "ReviewsConnection",
    },
    __typename: "Title",
  },
  main: {
    id: "tt2356777",
    wins: {
      total: 30,
      __typename: "AwardNominationConnection",
    },
    nominations: {
      total: 93,
      __typename: "AwardNominationConnection",
    },
    prestigiousAwardSummary: {
      nominations: 17,
      wins: 5,
      award: {
        text: "Primetime Emmy",
        id: "aw0002214",
        event: {
          id: "ev0000223",
          __typename: "AwardsEvent",
        },
        __typename: "AwardDetails",
      },
      __typename: "PrestigiousAwardSummary",
    },
    ratingsSummary: {
      topRanking: {
        id: "topRatedTv:tt2356777:en_US",
        text: {
          value: "Top Rated TV",
          __typename: "LocalizedString",
        },
        rank: 42,
        __typename: "TopRanking",
      },
      __typename: "RatingsSummary",
    },
    episodes: {
      episodes: {
        total: 31,
        __typename: "EpisodeConnection",
      },
      seasons: [
        {
          number: 1,
          __typename: "EpisodesSeason",
        },
        {
          number: 2,
          __typename: "EpisodesSeason",
        },
        {
          number: 3,
          __typename: "EpisodesSeason",
        },
        {
          number: 4,
          __typename: "EpisodesSeason",
        },
        {
          number: 5,
          __typename: "EpisodesSeason",
        },
      ],
      years: [
        {
          year: 2014,
          __typename: "EpisodesYear",
        },
        {
          year: 2015,
          __typename: "EpisodesYear",
        },
        {
          year: 2019,
          __typename: "EpisodesYear",
        },
        {
          year: 2024,
          __typename: "EpisodesYear",
        },
      ],
      totalEpisodes: {
        total: 31,
        __typename: "EpisodeConnection",
      },
      unknownSeasonEpisodes: {
        total: 0,
        __typename: "EpisodeConnection",
      },
      topRated: {
        edges: [
          {
            node: {
              ratingsSummary: {
                aggregateRating: 9.6,
                __typename: "RatingsSummary",
              },
              __typename: "Title",
            },
            __typename: "EpisodeEdge",
          },
        ],
        __typename: "EpisodeConnection",
      },
      __typename: "Episodes",
    },
    videos: {
      total: 45,
      __typename: "TitleRelatedVideosConnection",
    },
    videoStrip: {
      edges: [
        {
          node: {
            id: "vi3412510489",
            contentType: {
              displayName: {
                value: "Clip",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "5 Unforgettable Jodie Foster Performances to Watch",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 61,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 1080,
              url: "https://m.media-amazon.com/images/M/MV5BY2UzOWU0NmMtY2RmZS00MDQ2LWJiMGMtNDBhMWFhNTc5MjhhXkEyXkFqcGdeQWplZmZscA@@._V1_.jpg",
              width: 1920,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi3290545689",
            contentType: {
              displayName: {
                value: "Clip",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "What Roles Has Colin Farrell Been Considered For?",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 220,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 1080,
              url: "https://m.media-amazon.com/images/M/MV5BYmM4MTY3MjItMzQyYy00NWY4LTk5MGMtYTc4ZjYwMTZmZDIwXkEyXkFqcGdeQWFybm8@._V1_.jpg",
              width: 1920,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi2247736857",
            contentType: {
              displayName: {
                value: "Clip",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "A Guide to the Style of Cary Joji Fukunaga",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 100,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 1080,
              url: "https://m.media-amazon.com/images/M/MV5BNDM0ZWI2YzMtMGRkZi00NzBhLWE3ZTctNTFmOTcwMDQ4MDBiXkEyXkFqcGdeQW1hZGV0aXNj._V1_.jpg",
              width: 1920,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi199933209",
            contentType: {
              displayName: {
                value: "Clip",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "True Detective: BTS of The Final Country",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 133,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 720,
              url: "https://m.media-amazon.com/images/M/MV5BNmZmOWIzMTItNzVkMC00NjM1LWJkNjctYzA1NGEwMGNmODQ0XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
              width: 1280,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi334150937",
            contentType: {
              displayName: {
                value: "Clip",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "True Detective: BTS Of Hunters In The Dark",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 166,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 720,
              url: "https://m.media-amazon.com/images/M/MV5BMWI2NmVmMzAtNTBmZS00ZmNkLWI5OWYtMTZiZmNmOGU4YjE2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
              width: 1280,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi703184153",
            contentType: {
              displayName: {
                value: "Clip",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "True Detective: Share When You Want",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 198,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 720,
              url: "https://m.media-amazon.com/images/M/MV5BZDJlM2JlMTYtN2ZjZC00NWVlLWEzYjAtYzBkNzliZGY0NTI2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
              width: 1280,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi3647257113",
            contentType: {
              displayName: {
                value: "Clip",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "Mahershala Ali of 'Green Book': \"No Small Parts\"",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 238,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 844,
              url: "https://m.media-amazon.com/images/M/MV5BYzc5NjhiYmItMzY3ZC00YTdjLThjN2ItNDQ1ZmQxMGMwMWY0XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
              width: 1600,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi1823852057",
            contentType: {
              displayName: {
                value: "Trailer",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "Season Finale Preview",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 46,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 1080,
              url: "https://m.media-amazon.com/images/M/MV5BNWRmYjkzZjEtMTljMC00YTQ0LTk1N2MtZDM1ODdjY2UyMDJkXkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg",
              width: 1920,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi2561984025",
            contentType: {
              displayName: {
                value: "Trailer",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "Finale Trailer",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 43,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 919,
              url: "https://m.media-amazon.com/images/M/MV5BMmUxYTViZWYtZWViYi00OGMxLWJmMTItZDg2NDVkYTk5ZmRjXkEyXkFqcGdeQWFkcmllY2xh._V1_.jpg",
              width: 1633,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi4045260569",
            contentType: {
              displayName: {
                value: "Trailer",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "True Detective: Night Country - Official Trailer",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 147,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 1080,
              url: "https://m.media-amazon.com/images/M/MV5BOTlmMmNkZTQtOTkxMS00M2ZmLTg4YjctZmEzMjJiZWIzMzFiXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
              width: 1920,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi67814425",
            contentType: {
              displayName: {
                value: "Trailer",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "Season 4 Official Teaser",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 106,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 864,
              url: "https://m.media-amazon.com/images/M/MV5BZjNmNGMzM2YtN2IxYS00OWU2LWEyZDgtM2FmYmRhNmFkMTVhXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
              width: 1536,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
        {
          node: {
            id: "vi2747906585",
            contentType: {
              displayName: {
                value: "Trailer",
                __typename: "LocalizedString",
              },
              __typename: "VideoContentType",
            },
            name: {
              value: "Official Trailer #2",
              __typename: "LocalizedString",
            },
            runtime: {
              value: 122,
              __typename: "VideoRuntime",
            },
            thumbnail: {
              height: 720,
              url: "https://m.media-amazon.com/images/M/MV5BMGEwZjVkYjQtMDVmMS00MDZmLWFhMjUtOTFmN2QwMzIxN2VhXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg",
              width: 1280,
              __typename: "Thumbnail",
            },
            __typename: "Video",
          },
          __typename: "VideoEdge",
        },
      ],
      __typename: "VideoConnection",
    },
    titleMainImages: {
      total: 1342,
      edges: [
        {
          node: {
            id: "rm2030714881",
            url: "https://m.media-amazon.com/images/M/MV5BZGY4OTA0ZjktZTFhZC00OGIzLWI2YmItYjQ2MTlmMzZlMDRmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            caption: {
              plainText: "Jodie Foster in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 1280,
            width: 1920,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm4266282497",
            url: "https://m.media-amazon.com/images/M/MV5BMzhmMzhkMDQtNmU5MS00ZTg1LWIxZTktNzkyYzkzMGQ1MGU0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            caption: {
              plainText: "Jodie Foster in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 1280,
            width: 1920,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm4249505281",
            url: "https://m.media-amazon.com/images/M/MV5BN2E2YTZjNDUtMTdmNS00OWFkLTgzYTAtYTE4MmExMGQ1NGRiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            caption: {
              plainText: "Fiona Shaw in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 1283,
            width: 1920,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm4283059713",
            url: "https://m.media-amazon.com/images/M/MV5BMjg1Nzg4ZmEtNDgwYS00MTlkLTllNGQtMWE2MjBkZjRmZjZiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            caption: {
              plainText: "Kali Reis in Night Country: Part 1 (2024)",
              __typename: "Markdown",
            },
            height: 1283,
            width: 1920,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm4031401473",
            url: "https://m.media-amazon.com/images/M/MV5BODFlMDU5ZjctMmIxNy00MzFhLWJiOTItNTkyNjQ1NGYyYTMwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            caption: {
              plainText: "John Hawkes in Night Country: Part 1 (2024)",
              __typename: "Markdown",
            },
            height: 1283,
            width: 1920,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm120672769",
            url: "https://m.media-amazon.com/images/M/MV5BMDM3ZWJmZjctMGVjNS00NTYwLWE4ZDAtZDAzNzY2YWFmNGFjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            caption: {
              plainText: "Jodie Foster and Kali Reis in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 1283,
            width: 1920,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm3171625217",
            url: "https://m.media-amazon.com/images/M/MV5BZjI0ODA4ZWQtZWNkZC00MjkzLTk4NGMtYTk4MzZkM2U3YjgwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            caption: {
              plainText: "Jodie Foster in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 1334,
            width: 2000,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm4094175489",
            url: "https://m.media-amazon.com/images/M/MV5BOWFlNjA5NTYtMDk1Yy00NmExLTkwOTItYjljNjJlMTFhYTJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            caption: {
              plainText: "Jodie Foster and Kali Reis in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 1280,
            width: 1920,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm4056771584",
            url: "https://m.media-amazon.com/images/M/MV5BMTc0YjY0NDItMjQ5ZC00MDVhLThhMGMtYWY4MGQ5MTM2NjhlXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
            caption: {
              plainText:
                "Stephen Dorff, Brett Cullen, and Mahershala Ali in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 2800,
            width: 4200,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm1354788608",
            url: "https://m.media-amazon.com/images/M/MV5BMzIzNDhhMTEtOGIyOS00ODQ4LTk0MWEtMzRjODY3ODI4OWQzXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
            caption: {
              plainText:
                "Stephen Dorff and Mahershala Ali in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 2800,
            width: 4200,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm3314314752",
            url: "https://m.media-amazon.com/images/M/MV5BMDcwNTM0MjUtN2QzNi00MjE4LTg1ZjEtYzA3NzQxNmNhNzQyXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
            caption: {
              plainText: "Carmen Ejogo in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 2600,
            width: 3900,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm4215630080",
            url: "https://m.media-amazon.com/images/M/MV5BYTI5ZGUxMTYtNzA0MS00MWZjLTllNTEtZjQyYTNiODFlZWI1XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            caption: {
              plainText: "Mahershala Ali in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 375,
            width: 500,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
        {
          node: {
            id: "rm2067625984",
            url: "https://m.media-amazon.com/images/M/MV5BMjI3MDc2MjI2MF5BMl5BanBnXkFtZTgwMTA5NjIyNjM@._V1_.jpg",
            caption: {
              plainText: "Mahershala Ali in True Detective (2014)",
              __typename: "Markdown",
            },
            height: 675,
            width: 1200,
            __typename: "Image",
          },
          __typename: "ImageEdge",
        },
      ],
      __typename: "ImageConnection",
    },
    productionStatus: {
      currentProductionStage: {
        id: "released",
        text: "Released",
        __typename: "ProductionStage",
      },
      productionStatusHistory: [
        {
          status: {
            id: "pitch",
            text: "Pitch",
            __typename: "ProductionStatus",
          },
          __typename: "ProductionStatusHistory",
        },
        {
          status: {
            id: "pre_production",
            text: "Pre-production",
            __typename: "ProductionStatus",
          },
          __typename: "ProductionStatusHistory",
        },
        {
          status: {
            id: "pre_production",
            text: "Pre-production",
            __typename: "ProductionStatus",
          },
          __typename: "ProductionStatusHistory",
        },
        {
          status: {
            id: "filming",
            text: "Filming",
            __typename: "ProductionStatus",
          },
          __typename: "ProductionStatusHistory",
        },
        {
          status: {
            id: "released",
            text: "Released",
            __typename: "ProductionStatus",
          },
          __typename: "ProductionStatusHistory",
        },
      ],
      restriction: null,
      __typename: "ProductionStatusDetails",
    },
    primaryImage: {
      id: "rm3969993729",
      __typename: "Image",
    },
    imageUploadLink: {
      url: "https://contribute.imdb.com/image/tt2356777/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web",
      __typename: "ContributionLink",
    },
    titleType: {
      id: "tvSeries",
      canHaveEpisodes: true,
      __typename: "TitleType",
    },
    cast: {
      edges: [
        {
          node: {
            name: {
              id: "nm0000681",
              nameText: {
                text: "Vince Vaughn",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMTQ1MDA0MzE0MF5BMl5BanBnXkFtZTYwOTUzOTI4._V1_.jpg",
                width: 288,
                height: 400,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Frank Semyon",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2015,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0268199",
              nameText: {
                text: "Colin Farrell",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMTg4NzM5NDk0MV5BMl5BanBnXkFtZTcwNzAzMTUxNw@@._V1_.jpg",
                width: 1429,
                height: 2048,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Detective Ray Velcoro",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2015,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm1046097",
              nameText: {
                text: "Rachel McAdams",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMTY5ODcxMDU4NV5BMl5BanBnXkFtZTcwMjAzNjQyNQ@@._V1_.jpg",
                width: 1413,
                height: 2048,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actress",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Detective Ani Bezzerides",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2015,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm2018237",
              nameText: {
                text: "Taylor Kitsch",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMTQxODM4MDctM2ZjYy00ZDc5LTkxMzAtNjQ4ODIyNjVhMGMyXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg",
                width: 517,
                height: 775,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Officer Paul Woodrugh",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2015,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0000190",
              nameText: {
                text: "Matthew McConaughey",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_.jpg",
                width: 1256,
                height: 2048,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Detective Rust Cohle",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2014,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0991810",
              nameText: {
                text: "Mahershala Ali",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BZThiZjJjNWYtNGRlYS00NDdkLTk0MTMtYjEwYzM1MDExNTYwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
                width: 3260,
                height: 3569,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Detective Wayne Hays",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2019,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0000437",
              nameText: {
                text: "Woody Harrelson",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMTU3NDc2ODc4MF5BMl5BanBnXkFtZTcwODk2MzAyMg@@._V1_.jpg",
                width: 272,
                height: 400,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Detective Marty Hart",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2014,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0252238",
              nameText: {
                text: "Carmen Ejogo",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMjI4NzA5NzI0MV5BMl5BanBnXkFtZTcwNTY3MDY0Ng@@._V1_.jpg",
                width: 540,
                height: 720,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actress",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Amelia Reardon",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2019,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm1157358",
              nameText: {
                text: "Michelle Monaghan",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BNzEwYTdjNjYtZDk4NC00YzFmLTlkZTQtNTQyZTg3YmIxYWIxL2ltYWdlXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
                width: 2400,
                height: 3000,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actress",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Maggie Hart",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2014,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0001151",
              nameText: {
                text: "Stephen Dorff",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMjA5MzY3NjcyN15BMl5BanBnXkFtZTcwNjEzMzEwNA@@._V1_.jpg",
                width: 277,
                height: 400,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Detective Roland West",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2019,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0693446",
              nameText: {
                text: "Michael Potts",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMzM1MTYxMjk4MV5BMl5BanBnXkFtZTgwNzMxNTM1MjE@._V1_.jpg",
                width: 1527,
                height: 2048,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Detective Maynard Gilbough",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2014,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0717709",
              nameText: {
                text: "Kelly Reilly",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BNjgzMzk2MjEzM15BMl5BanBnXkFtZTgwMTkzMDEwMTE@._V1_.jpg",
                width: 1362,
                height: 2048,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actress",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Jordan Semyon",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2015,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm1058940",
              nameText: {
                text: "Scoot McNairy",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMzUxYjM1ZjEtYTcwNy00MDkyLWJjZGItMjFmNjZjM2ViMDMwXkEyXkFqcGdeQXVyMjMxOTI4MTk@._V1_.jpg",
                width: 871,
                height: 641,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Tom Purcell",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2019,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0457796",
              nameText: {
                text: "Tory Kittles",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMTg2NzM4NDE4MF5BMl5BanBnXkFtZTgwMDAxNDg4NjE@._V1_.jpg",
                width: 1499,
                height: 1853,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Detective Thomas Papania",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2014,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm3570321",
              nameText: {
                text: "Ray Fisher",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BYjM2NjQ5ZjQtYWU3OS00ZmQ2LWE1MzgtNzM5YjQzZjRmMWRkXkEyXkFqcGdeQXVyNzA5NjQ5MDk@._V1_.jpg",
                width: 720,
                height: 1080,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Henry Hays",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2019,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm1651119",
              nameText: {
                text: "Chris Kerson",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BZWEwYWY5OGYtMjc0OC00MjA5LWJhYmEtYWM2MzAxZWVmZmI5XkEyXkFqcGdeQXVyNzc2NzYxNA@@._V1_.jpg",
                width: 959,
                height: 931,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Nails",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 8,
              yearRange: {
                year: 2015,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0182662",
              nameText: {
                text: "Ritchie Coster",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BMTMxMjE2MTU5M15BMl5BanBnXkFtZTYwNTM2ODM0._V1_.jpg",
                width: 285,
                height: 400,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actor",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Mayor Austin Chessani",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 7,
              yearRange: {
                year: 2015,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
        {
          node: {
            name: {
              id: "nm0300589",
              nameText: {
                text: "Sarah Gadon",
                __typename: "NameText",
              },
              primaryImage: {
                url: "https://m.media-amazon.com/images/M/MV5BY2I3YTA3M2EtYWJhYS00NjJlLTg1NzYtMTdmNjI5M2ViY2ZiXkEyXkFqcGdeQXVyMzE1MjkwODU@._V1_.jpg",
                width: 683,
                height: 1024,
                __typename: "Image",
              },
              __typename: "Name",
            },
            attributes: null,
            category: {
              id: "actress",
              __typename: "CreditCategory",
            },
            characters: [
              {
                name: "Elisa Montgomery",
                __typename: "Character",
              },
            ],
            episodeCredits: {
              total: 7,
              yearRange: {
                year: 2019,
                endYear: null,
                __typename: "YearRange",
              },
              __typename: "EpisodeCastConnection",
            },
            __typename: "Cast",
          },
          __typename: "CreditEdge",
        },
      ],
      __typename: "CreditConnection",
    },
    creators: [
      {
        totalCredits: 8,
        category: {
          text: "Creators",
          __typename: "CreditCategory",
        },
        credits: [
          {
            name: {
              id: "nm4446305",
              nameText: {
                text: "Nic Pizzolatto",
                __typename: "NameText",
              },
              __typename: "Name",
            },
            attributes: null,
            __typename: "Crew",
          },
          {
            name: {
              id: "nm0411517",
              nameText: {
                text: "Issa López",
                __typename: "NameText",
              },
              __typename: "Name",
            },
            attributes: null,
            __typename: "Crew",
          },
        ],
        __typename: "PrincipalCreditsForCategory",
      },
    ],
    directors: [],
    writers: [],
    isAdult: false,
    moreLikeThisTitles: {
      edges: [
        {
          node: {
            id: "tt2802850",
            titleText: {
              text: "Fargo",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "Fargo",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm696145153",
              width: 1638,
              height: 2048,
              url: "https://m.media-amazon.com/images/M/MV5BMjNlMTIxNDEtY2U3OC00ZGFlLTgxNzEtZDU3NTdiZTAzN2MxXkEyXkFqcGdeQXVyMTU1ODIwMTM1._V1_.jpg",
              caption: {
                plainText: "Fargo (2014)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 2014,
              endYear: 2024,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 8.9,
              voteCount: 419243,
              __typename: "RatingsSummary",
            },
            runtime: {
              seconds: 3600,
              __typename: "Runtime",
            },
            certificate: {
              rating: "15",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Crime",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Drama",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Thriller",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt0944947",
            titleText: {
              text: "Game of Thrones",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "Game of Thrones",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm3885121281",
              width: 1000,
              height: 1500,
              url: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
              caption: {
                plainText: "Sean Bean in Game of Thrones (2011)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 2011,
              endYear: 2019,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 9.2,
              voteCount: 2271250,
              __typename: "RatingsSummary",
            },
            runtime: {
              seconds: 3600,
              __typename: "Runtime",
            },
            certificate: {
              rating: "18",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Action",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Adventure",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Drama",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt3581920",
            titleText: {
              text: "The Last of Us",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "The Last of Us",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm553794049",
              width: 2700,
              height: 4000,
              url: "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg",
              caption: {
                plainText:
                  "Pedro Pascal and Bella Ramsey in The Last of Us (2023)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 2023,
              endYear: null,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 8.7,
              voteCount: 511223,
              __typename: "RatingsSummary",
            },
            runtime: {
              seconds: 3000,
              __typename: "Runtime",
            },
            certificate: {
              rating: "15",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Action",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Adventure",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Drama",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt0903747",
            titleText: {
              text: "Breaking Bad",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "Breaking Bad",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm3116305665",
              width: 2000,
              height: 3000,
              url: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
              caption: {
                plainText: "Bryan Cranston in Breaking Bad (2008)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 2008,
              endYear: 2013,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 9.5,
              voteCount: 2120660,
              __typename: "RatingsSummary",
            },
            runtime: {
              seconds: 2700,
              __typename: "Runtime",
            },
            certificate: {
              rating: "18",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Crime",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Drama",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Thriller",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt4574334",
            titleText: {
              text: "Stranger Things",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "Stranger Things",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm3336115457",
              width: 1080,
              height: 1350,
              url: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
              caption: {
                plainText:
                  "Winona Ryder, Tom Wlaschiha, David Harbour, Brett Gelman, Maya Hawke, Jamie Campbell Bower, Natalia Dyer, Joseph Quinn, Caleb McLaughlin, Sadie Sink, Millie Bobby Brown, Finn Wolfhard, Charlie Heaton, Joe Keery, Noah Schnapp, Gaten Matarazzo, Priah Ferguson, and Eduardo Franco in Stranger Things (2016)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 2016,
              endYear: 2025,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 8.7,
              voteCount: 1326968,
              __typename: "RatingsSummary",
            },
            runtime: {
              seconds: 3600,
              __typename: "Runtime",
            },
            certificate: {
              rating: "15",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Drama",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Fantasy",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Horror",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt1190634",
            titleText: {
              text: "The Boys",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "The Boys",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm1642822656",
              width: 960,
              height: 1200,
              url: "https://m.media-amazon.com/images/M/MV5BMTY2NDY5MTYzOF5BMl5BanBnXkFtZTgwMTcyNTM0NjM@._V1_.jpg",
              caption: {
                plainText:
                  "Laz Alonso, Karl Urban, Jack Quaid, Tomer Capone, and Karen Fukuhara in The Boys (2019)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 2019,
              endYear: null,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 8.7,
              voteCount: 641837,
              __typename: "RatingsSummary",
            },
            runtime: {
              seconds: 3600,
              __typename: "Runtime",
            },
            certificate: {
              rating: "18",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Action",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Comedy",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Crime",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt7366338",
            titleText: {
              text: "Chernobyl",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvMiniSeries",
              text: "TV Mini Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Mini Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "Chernobyl",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm1992896001",
              width: 1631,
              height: 2250,
              url: "https://m.media-amazon.com/images/M/MV5BNTdkN2QwMDItMDVhNS00ZjFiLWEzNTctMzY5ODQzYWNkMDllXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
              caption: {
                plainText: "Chernobyl (2019)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 2019,
              endYear: 2019,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 9.3,
              voteCount: 857925,
              __typename: "RatingsSummary",
            },
            runtime: null,
            certificate: {
              rating: "15",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Drama",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "History",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Thriller",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt0141842",
            titleText: {
              text: "The Sopranos",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "The Sopranos",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm4054074881",
              width: 1366,
              height: 2048,
              url: "https://m.media-amazon.com/images/M/MV5BZTZkMWVkNTEtYzMxMC00MzQzLTg5NjUtNTNmN2M2NzEwNzI0XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_.jpg",
              caption: {
                plainText:
                  "Lorraine Bracco, James Gandolfini, Edie Falco, Steven Van Zandt, Dominic Chianese, Robert Iler, Michael Imperioli, Steve Schirripa, Jamie-Lynn Sigler, Tony Sirico, and Aida Turturro in The Sopranos (1999)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 1999,
              endYear: 2007,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 9.2,
              voteCount: 466446,
              __typename: "RatingsSummary",
            },
            runtime: {
              seconds: 3600,
              __typename: "Runtime",
            },
            certificate: {
              rating: "18",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Crime",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Drama",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt0087182",
            titleText: {
              text: "Dune",
              __typename: "TitleText",
            },
            titleType: {
              id: "movie",
              text: "Movie",
              canHaveEpisodes: false,
              displayableProperty: {
                value: {
                  plainText: "",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "Dune",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm423377408",
              width: 913,
              height: 1426,
              url: "https://m.media-amazon.com/images/M/MV5BYTAzYzNlMDMtMGRjYS00M2UxLTk0MmEtYmE4YWZiYmEwOTIwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_.jpg",
              caption: {
                plainText: "Sean Young and Kyle MacLachlan in Dune (1984)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 1984,
              endYear: null,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 6.3,
              voteCount: 176758,
              __typename: "RatingsSummary",
            },
            runtime: {
              seconds: 8220,
              __typename: "Runtime",
            },
            certificate: {
              rating: "12",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Action",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Adventure",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Sci-Fi",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: false,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt2442560",
            titleText: {
              text: "Peaky Blinders",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "Peaky Blinders",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm775346176",
              width: 600,
              height: 869,
              url: "https://m.media-amazon.com/images/M/MV5BMTQxODYzNTQzOV5BMl5BanBnXkFtZTgwMTI2MDYwMDE@._V1_.jpg",
              caption: {
                plainText: "Cillian Murphy in Peaky Blinders (2013)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 2013,
              endYear: 2022,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 8.8,
              voteCount: 643034,
              __typename: "RatingsSummary",
            },
            runtime: {
              seconds: 3600,
              __typename: "Runtime",
            },
            certificate: {
              rating: "18",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Crime",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Drama",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt16283804",
            titleText: {
              text: "One Day",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvMiniSeries",
              text: "TV Mini Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Mini Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "One Day",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm2364821249",
              width: 1500,
              height: 2222,
              url: "https://m.media-amazon.com/images/M/MV5BMDc1ZWE0ZjQtMTEwMC00ZmI1LWE5OWItNjE2NGM3ZjdjZGZlXkEyXkFqcGdeQXVyODE4NzU4OTY@._V1_.jpg",
              caption: {
                plainText: "Ambika Mod and Leo Woodall in One Day (2024)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 2024,
              endYear: 2024,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 8.1,
              voteCount: 35590,
              __typename: "RatingsSummary",
            },
            runtime: null,
            certificate: {
              rating: "15",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Comedy",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Drama",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Romance",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
        {
          node: {
            id: "tt0306414",
            titleText: {
              text: "The Wire",
              __typename: "TitleText",
            },
            titleType: {
              id: "tvSeries",
              text: "TV Series",
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: "TV Series",
                  __typename: "Markdown",
                },
                __typename: "DisplayableTitleTypeProperty",
              },
              __typename: "TitleType",
            },
            originalTitleText: {
              text: "The Wire",
              __typename: "TitleText",
            },
            primaryImage: {
              id: "rm4207608320",
              width: 1600,
              height: 2400,
              url: "https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
              caption: {
                plainText:
                  "Idris Elba, Wood Harris, Sonja Sohn, and Dominic West in The Wire (2002)",
                __typename: "Markdown",
              },
              __typename: "Image",
            },
            releaseYear: {
              year: 2002,
              endYear: 2008,
              __typename: "YearRange",
            },
            ratingsSummary: {
              aggregateRating: 9.3,
              voteCount: 374922,
              __typename: "RatingsSummary",
            },
            runtime: {
              seconds: 3600,
              __typename: "Runtime",
            },
            certificate: {
              rating: "18",
              __typename: "Certificate",
            },
            canRate: {
              isRatable: true,
              __typename: "CanRate",
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: "Crime",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Drama",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
                {
                  genre: {
                    text: "Thriller",
                    __typename: "GenreItem",
                  },
                  __typename: "TitleGenre",
                },
              ],
              __typename: "TitleGenres",
            },
            canHaveEpisodes: true,
            __typename: "Title",
          },
          __typename: "MoreLikeThisEdge",
        },
      ],
      __typename: "MoreLikeThisConnection",
    },
    triviaTotal: {
      total: 57,
      __typename: "TriviaConnection",
    },
    trivia: {
      edges: [
        {
          node: {
            text: {
              plaidHtml:
                "To prepare, Matthew McConaughey created a four hundred fifty-page analysis, the &quot;Four Stages of Rustin Cohle,&quot; to study his character&#39;s evolution over the course of the story.",
              __typename: "Markdown",
            },
            trademark: null,
            relatedNames: null,
            __typename: "TitleTrivia",
          },
          __typename: "TriviaEdge",
        },
      ],
      __typename: "TriviaConnection",
    },
    goofsTotal: {
      total: 1,
      __typename: "GoofConnection",
    },
    goofs: {
      edges: [
        {
          node: {
            text: {
              plaidHtml:
                "Detective Rust Cohle is seen looking at his watch as it beeps. His watch is a mechanical dive watch without any digital components, and is unable to beep.",
              __typename: "Markdown",
            },
            __typename: "Goof",
          },
          __typename: "GoofEdge",
        },
      ],
      __typename: "GoofConnection",
    },
    quotesTotal: {
      total: 16,
      __typename: "TitleQuoteConnection",
    },
    quotes: {
      edges: [
        {
          node: {
            lines: [
              {
                characters: [
                  {
                    character: "Detective Rust Cohle",
                    name: {
                      id: "nm0000190",
                      __typename: "Name",
                    },
                    __typename: "TitleQuoteCharacter",
                  },
                ],
                text: "Life's barely long enough to get good at one thing. So be careful what you get good at.",
                stageDirection: null,
                __typename: "TitleQuoteLine",
              },
            ],
            __typename: "TitleQuote",
          },
          __typename: "TitleQuoteEdge",
        },
      ],
      __typename: "TitleQuoteConnection",
    },
    crazyCredits: {
      edges: [],
      __typename: "CrazyCreditConnection",
    },
    alternateVersions: {
      total: 0,
      edges: [],
      __typename: "AlternateVersionConnection",
    },
    connections: {
      edges: [
        {
          node: {
            associatedTitle: {
              id: "tt3482956",
              releaseYear: {
                year: 2014,
                __typename: "YearRange",
              },
              titleText: {
                text: "Episode #8.19",
                __typename: "TitleText",
              },
              originalTitleText: {
                text: "Episode #8.19",
                __typename: "TitleText",
              },
              series: {
                series: {
                  titleText: {
                    text: "Chelsea Lately",
                    __typename: "TitleText",
                  },
                  originalTitleText: {
                    text: "Chelsea Lately",
                    __typename: "TitleText",
                  },
                  __typename: "Title",
                },
                __typename: "Series",
              },
              __typename: "Title",
            },
            category: {
              text: "Featured in",
              __typename: "TitleConnectionCategory",
            },
            __typename: "TitleConnection",
          },
          __typename: "TitleConnectionEdge",
        },
      ],
      __typename: "TitleConnectionConnection",
    },
    soundtrack: {
      edges: [
        {
          node: {
            text: "Far From Any Road",
            comments: [
              {
                plaidHtml:
                  'By <a class="ipc-md-link ipc-md-link--entity" href="/name/nm1975700/?ref_=tt_trv_snd">The Handsome Family</a>',
                __typename: "Markdown",
              },
            ],
            __typename: "Track",
          },
          __typename: "SoundtrackEdge",
        },
      ],
      __typename: "SoundtrackConnection",
    },
    titleText: {
      text: "True Detective",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "True Detective",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2014,
      __typename: "YearRange",
    },
    reviews: {
      total: 1343,
      __typename: "ReviewsConnection",
    },
    featuredReviews: {
      edges: [
        {
          node: {
            id: "rw4560521",
            author: {
              nickName: "ricochet93-369-308802",
              userId: "ur33693994",
              __typename: "UserProfile",
            },
            summary: {
              originalText: "Season One is Perfection",
              __typename: "ReviewSummary",
            },
            text: {
              originalText: {
                plaidHtml:
                  "Season one is a beautiful thing.<br/><br/>Then Vince Vaughan happened and the less said about that the better.",
                __typename: "Markdown",
              },
              __typename: "ReviewText",
            },
            authorRating: 10,
            submissionDate: "2019-01-04",
            helpfulness: {
              upVotes: 469,
              downVotes: 46,
              __typename: "ReviewHelpfulness",
            },
            __typename: "Review",
          },
          __typename: "ReviewEdge",
        },
      ],
      __typename: "ReviewsConnection",
    },
    canRate: {
      isRatable: true,
      __typename: "CanRate",
    },
    iframeAddReviewLink: {
      url: "https://contribute.imdb.com/review/tt2356777/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web",
      __typename: "ContributionLink",
    },
    topQuestions: {
      total: 19,
      edges: [
        {
          node: {
            attributeId: "number-of-seasons",
            question: {
              plainText: "How many seasons does True Detective have?",
              __typename: "Markdown",
            },
            __typename: "AlexaQuestion",
          },
          __typename: "AlexaQuestionEdge",
        },
      ],
      __typename: "AlexaQuestionConnection",
    },
    faqs: {
      total: 5,
      edges: [
        {
          node: {
            id: "fq0100730",
            question: {
              plainText: "Will there be a season 4?",
              __typename: "Markdown",
            },
            __typename: "Faq",
          },
          __typename: "FaqEdge",
        },
        {
          node: {
            id: "fq0045113",
            question: {
              plainText:
                "What is the name and the lyrics to the True Detective theme song?",
              __typename: "Markdown",
            },
            __typename: "Faq",
          },
          __typename: "FaqEdge",
        },
        {
          node: {
            id: "fq0045117",
            question: {
              plainText:
                "Do I need to see Season One before starting Season Two?",
              __typename: "Markdown",
            },
            __typename: "Faq",
          },
          __typename: "FaqEdge",
        },
      ],
      __typename: "FaqConnection",
    },
    releaseDate: {
      day: 22,
      month: 2,
      year: 2014,
      country: {
        id: "GB",
        text: "United Kingdom",
        __typename: "LocalizedDisplayableCountry",
      },
      __typename: "ReleaseDate",
    },
    countriesOfOrigin: {
      countries: [
        {
          id: "US",
          text: "United States",
          __typename: "CountryOfOrigin",
        },
      ],
      __typename: "CountriesOfOrigin",
    },
    detailsExternalLinks: {
      edges: [
        {
          node: {
            url: "https://www.facebook.com/TrueDetective",
            label: "Official Facebook",
            externalLinkRegion: null,
            __typename: "ExternalLink",
          },
          __typename: "ExternalLinkEdge",
        },
        {
          node: {
            url: "https://instagram.com/truedetective/",
            label: "Official Instagram",
            externalLinkRegion: null,
            __typename: "ExternalLink",
          },
          __typename: "ExternalLinkEdge",
        },
      ],
      total: 5,
      __typename: "ExternalLinkConnection",
    },
    spokenLanguages: {
      spokenLanguages: [
        {
          id: "en",
          text: "English",
          __typename: "SpokenLanguage",
        },
      ],
      __typename: "SpokenLanguages",
    },
    akas: {
      edges: [
        {
          node: {
            text: "True Detective: Night Country",
            __typename: "Aka",
          },
          __typename: "AkaEdge",
        },
      ],
      __typename: "AkaConnection",
    },
    filmingLocations: {
      edges: [
        {
          node: {
            text: "Arkansas, USA",
            location: "Arkansas, USA",
            attributes: [
              {
                text: "Season 3",
                __typename: "DisplayableAttribute",
              },
            ],
            __typename: "FilmingLocation",
          },
          __typename: "FilmingLocationEdge",
        },
      ],
      total: 42,
      __typename: "FilmingLocationConnection",
    },
    production: {
      edges: [
        {
          node: {
            company: {
              id: "co0017525",
              companyText: {
                text: "Anonymous Content",
                __typename: "CompanyText",
              },
              __typename: "Company",
            },
            __typename: "CompanyCredit",
          },
          __typename: "CompanyCreditEdge",
        },
        {
          node: {
            company: {
              id: "co0284741",
              companyText: {
                text: "HBO Entertainment",
                __typename: "CompanyText",
              },
              __typename: "Company",
            },
            __typename: "CompanyCredit",
          },
          __typename: "CompanyCreditEdge",
        },
        {
          node: {
            company: {
              id: "co0176737",
              companyText: {
                text: "Passenger",
                __typename: "CompanyText",
              },
              __typename: "Company",
            },
            __typename: "CompanyCredit",
          },
          __typename: "CompanyCreditEdge",
        },
      ],
      __typename: "CompanyCreditConnection",
    },
    companies: {
      total: 72,
      __typename: "CompanyCreditConnection",
    },
    productionBudget: null,
    lifetimeGross: null,
    openingWeekendGross: null,
    worldwideGross: null,
    technicalSpecifications: {
      soundMixes: {
        items: [
          {
            id: "dolby_digital",
            text: "Dolby Digital",
            attributes: [],
            __typename: "SoundMix",
          },
        ],
        __typename: "SoundMixes",
      },
      aspectRatios: {
        items: [
          {
            aspectRatio: "1.78 : 1",
            attributes: [],
            __typename: "AspectRatio",
          },
        ],
        __typename: "AspectRatios",
      },
      colorations: {
        items: [
          {
            conceptId: "color",
            text: "Color",
            attributes: [],
            __typename: "Coloration",
          },
        ],
        __typename: "Colorations",
      },
      __typename: "TechnicalSpecifications",
    },
    runtime: {
      seconds: 3600,
      __typename: "Runtime",
    },
    series: null,
    canHaveEpisodes: true,
    contributionQuestions: {
      contributionLink: {
        url: "https://contribute.imdb.com/answers",
        __typename: "ContributionQuestionsLink",
      },
      edges: [],
      __typename: "QuestionConnection",
    },
    __typename: "Title",
  },
  fake: {
    "#TITLE": "True Detective",
    "#YEAR": 2014,
    "#IMDB_ID": "tt2356777",
    "#RANK": 27,
    "#ACTORS": "Vince Vaughn, Colin Farrell",
    "#AKA": "True Detective (2014) ",
    "#IMDB_URL": "https://imdb.com/title/tt2356777",
    "#IMDB_IV":
      "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt2356777&rhash=77ed0696a538f4",
    "#IMG_POSTER":
      "https://m.media-amazon.com/images/M/MV5BNTEzMzBiNGYtYThiZS00MzBjLTk5ZWItM2FmMzU3Y2RjYTVlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    photo_width: 2025,
    photo_height: 3000,
  },
  storyLine: {
    id: "tt2356777",
    summaries: {
      edges: [
        {
          node: {
            plotText: {
              plaidHtml:
                "In 2012, Louisiana State Police Detectives Rust Cohle and Martin Hart are brought in to revisit a homicide case they worked in 1995. As the inquiry unfolds in present day through separate interrogations, the two former detectives narrate the story of their investigation, reopening unhealed wounds, and drawing into question their supposed solving of a bizarre ritualistic murder in 1995. The timelines braid and converge in 2012 as each man is pulled back into a world they believed they&#39;d left behind. In learning about each other and their killer, it becomes clear that darkness lives on both sides of the law.",
              __typename: "Markdown",
            },
            experimental_translatedPlotText: null,
            author: "Rich28",
            __typename: "Plot",
          },
          __typename: "PlotEdge",
        },
      ],
      __typename: "PlotConnection",
    },
    outlines: {
      edges: [
        {
          node: {
            plotText: {
              plaidHtml:
                "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
              __typename: "Markdown",
            },
            experimental_translatedPlotText: null,
            __typename: "Plot",
          },
          __typename: "PlotEdge",
        },
      ],
      __typename: "PlotConnection",
    },
    synopses: {
      edges: [
        {
          node: {
            plotText: {
              plaidHtml:
                "The first season focuses on two detectives, Martin Hart (Woody Harrelson) and Rust Cohle (Matthew McConaughey) as they end up crossing paths while hunting a serial killer in Louisiana for 17 years. The series will feature multiple timelines to trace the hunt of the two detectives, jumping in time from the first case opening in 1995 to 2012, when the case is reopened.",
              __typename: "Markdown",
            },
            experimental_translatedPlotText: null,
            __typename: "Plot",
          },
          __typename: "PlotEdge",
        },
      ],
      __typename: "PlotConnection",
    },
    storylineKeywords: {
      edges: [
        {
          node: {
            legacyId: "southern-gothic",
            text: "southern gothic",
            __typename: "TitleKeyword",
          },
          __typename: "TitleKeywordEdge",
        },
        {
          node: {
            legacyId: "murder",
            text: "murder",
            __typename: "TitleKeyword",
          },
          __typename: "TitleKeywordEdge",
        },
        {
          node: {
            legacyId: "police-detective",
            text: "police detective",
            __typename: "TitleKeyword",
          },
          __typename: "TitleKeywordEdge",
        },
        {
          node: {
            legacyId: "police-investigation",
            text: "police investigation",
            __typename: "TitleKeyword",
          },
          __typename: "TitleKeywordEdge",
        },
        {
          node: {
            legacyId: "female-full-frontal-nudity",
            text: "female full frontal nudity",
            __typename: "TitleKeyword",
          },
          __typename: "TitleKeywordEdge",
        },
      ],
      total: 71,
      __typename: "TitleKeywordConnection",
    },
    taglines: {
      edges: [
        {
          node: {
            text: "Man is the cruelest animal. (Season 1)",
            experimental_translatedText: null,
            __typename: "Tagline",
          },
          __typename: "TaglineEdge",
        },
      ],
      total: 5,
      __typename: "TaglineConnection",
    },
    genres: {
      genres: [
        {
          id: "Crime",
          text: "Crime",
          __typename: "Genre",
        },
        {
          id: "Drama",
          text: "Drama",
          __typename: "Genre",
        },
        {
          id: "Mystery",
          text: "Mystery",
          __typename: "Genre",
        },
        {
          id: "Thriller",
          text: "Thriller",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    certificate: {
      rating: "TV-MA",
      ratingReason: null,
      ratingsBody: null,
      __typename: "Certificate",
    },
    parentsGuide: {
      guideItems: {
        total: 32,
        __typename: "ParentsGuideConnection",
      },
      __typename: "ParentsGuide",
    },
    __typename: "Title",
  },
};

export const moviesList = [
  {
    "#TITLE": "True Detective",
    "#YEAR": 2014,
    "#IMDB_ID": "tt2356777",
    "#RANK": 27,
    "#ACTORS": "Vince Vaughn, Colin Farrell",
    "#AKA": "True Detective (2014) ",
    "#IMDB_URL": "https://imdb.com/title/tt2356777",
    "#IMDB_IV":
      "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt2356777&rhash=77ed0696a538f4",
    "#IMG_POSTER":
      "https://m.media-amazon.com/images/M/MV5BNTEzMzBiNGYtYThiZS00MzBjLTk5ZWItM2FmMzU3Y2RjYTVlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    photo_width: 2025,
    photo_height: 3000,
  },
  {
    "#TITLE": "True Blood",
    "#YEAR": 2008,
    "#IMDB_ID": "tt0844441",
    "#RANK": 407,
    "#ACTORS": "Anna Paquin, Stephen Moyer",
    "#AKA": "True Blood (2008) ",
    "#IMDB_URL": "https://imdb.com/title/tt0844441",
    "#IMDB_IV":
      "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0844441&rhash=77ed0696a538f4",
    "#IMG_POSTER":
      "https://m.media-amazon.com/images/M/MV5BMDVjZDQ2N2MtMzMxYy00ZjliLTg5YjAtNjk1OTUwYjVjNWQ0XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg",
    photo_width: 750,
    photo_height: 1124,
  },
  {
    "#TITLE": "True Lies",
    "#YEAR": 1994,
    "#IMDB_ID": "tt0111503",
    "#RANK": 842,
    "#ACTORS": "Arnold Schwarzenegger, Jamie Lee Curtis",
    "#AKA": "True Lies (1994) ",
    "#IMDB_URL": "https://imdb.com/title/tt0111503",
    "#IMDB_IV":
      "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0111503&rhash=77ed0696a538f4",
    "#IMG_POSTER":
      "https://m.media-amazon.com/images/M/MV5BYzg5YmUyNGMtMThiNS00MjA2LTgwZDctNDlhM2RkZDNmZmRkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
    photo_width: 1343,
    photo_height: 2000,
  },
  {
    "#TITLE": "True Romance",
    "#YEAR": 1993,
    "#IMDB_ID": "tt0108399",
    "#RANK": 1179,
    "#ACTORS": "Christian Slater, Patricia Arquette",
    "#AKA": "True Romance (1993) ",
    "#IMDB_URL": "https://imdb.com/title/tt0108399",
    "#IMDB_IV":
      "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0108399&rhash=77ed0696a538f4",
    "#IMG_POSTER":
      "https://m.media-amazon.com/images/M/MV5BYWRhYWJjNGEtMjNhNi00NzFkLTk1ZGUtNjNmM2FlNTNhNWRjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    photo_width: 1989,
    photo_height: 2966,
  },
  {
    "#TITLE": "True Grit",
    "#YEAR": 2010,
    "#IMDB_ID": "tt1403865",
    "#RANK": 1724,
    "#ACTORS": "Jeff Bridges, Matt Damon",
    "#AKA": "True Grit (2010) ",
    "#IMDB_URL": "https://imdb.com/title/tt1403865",
    "#IMDB_IV":
      "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt1403865&rhash=77ed0696a538f4",
    "#IMG_POSTER":
      "https://m.media-amazon.com/images/M/MV5BMTU5MjU3MTI4OF5BMl5BanBnXkFtZTcwMTQxOTAxNA@@._V1_.jpg",
    photo_width: 1000,
    photo_height: 1481,
  },
  {
    "#TITLE": "True Beauty",
    "#YEAR": 2020,
    "#IMDB_ID": "tt13274038",
    "#RANK": 3875,
    "#ACTORS": "Moon Ga-young, Cha Eun-woo",
    "#AKA": "True Beauty (2020) ",
    "#IMDB_URL": "https://imdb.com/title/tt13274038",
    "#IMDB_IV":
      "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt13274038&rhash=77ed0696a538f4",
    "#IMG_POSTER":
      "https://m.media-amazon.com/images/M/MV5BNjk3NDk3MDEtMTU2OS00NTFiLWJkOWMtYTA2YjJlMTMyYTk1XkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_.jpg",
    photo_width: 1000,
    photo_height: 1416,
  },
  {
    "#TITLE": "True Spirit",
    "#YEAR": 2023,
    "#IMDB_ID": "tt2353868",
    "#RANK": 4361,
    "#ACTORS": "Alyla Browne, Teagan Croft",
    "#AKA": "True Spirit (2023) ",
    "#IMDB_URL": "https://imdb.com/title/tt2353868",
    "#IMDB_IV":
      "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt2353868&rhash=77ed0696a538f4",
    "#IMG_POSTER":
      "https://m.media-amazon.com/images/M/MV5BZDliNjMwYjktMGI5Zi00OWVkLWJmOWYtNjAxNGI1YzA3MTYxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    photo_width: 1080,
    photo_height: 1350,
  },
];
