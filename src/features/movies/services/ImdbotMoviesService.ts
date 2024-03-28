// An implementation for IMovies service (concrete class)


// I could not find a documentation for this api (imdbot), and you did not provide any in the assessment

import { IMoviesService } from "./IMoviesService";

export class ImdbotMoviesService implements IMoviesService {
  async search(keyword: string) {
    return fetch(`https://search.imdbot.workers.dev/?q=${keyword}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonResponse: SearchResponse) =>
        jsonResponse.description.map((movie) => ({
          id: movie["#IMDB_ID"],
          title: movie["#TITLE"],
          imageUrl: movie["#IMG_POSTER"],
        }))
      );
  }

  // I could not find an api for fetching random movies. Therefore, I used the same search API with empty keyword
  async findRandom() {
    return fetch("https://search.imdbot.workers.dev/?q=", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonResponse: FindRandomResponse) => {
        return jsonResponse.description.map((movie) => ({
          id: movie["#IMDB_ID"],
          title: movie["#TITLE"],
          imageUrl: movie["#IMG_POSTER"],
          actors: movie["#ACTORS"],
        }));
      });
  }

  async findById(id: string) {
    return fetch(`https://search.imdbot.workers.dev/?tt=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonResponse: FindByTTResponse) => ({
        id: jsonResponse.imdbId,
        title: jsonResponse.top.titleText.text,
        imageUrl: jsonResponse.fake["#IMG_POSTER"],
        description: jsonResponse.short.description,
        actors: jsonResponse.short.actor.map((actor) => actor.name),
        keywords: jsonResponse.top.keywords.edges.map(
          (keyword) => keyword.node.text
        ),
        reviews: jsonResponse.top.featuredReviews.edges.map((edge) => ({
          author: edge.node.author.nickName,
          text: edge.node.text.originalText.plainText,
          id: edge.node.author.nickName,
        })),
      }));
  }
}

type FindByTTResponse = {
  short: {
    "@context": string;
    "@type": string;
    url: string;
    name: string;
    image: string;
    description: string;
    review: {
      "@type": string;
      itemReviewed: {
        "@type": string;
        url: string;
      };
      author: {
        "@type": string;
        name: string;
      };
      dateCreated: string;
      inLanguage: string;
      name: string;
      reviewBody: string;
      reviewRating: {
        "@type": string;
        worstRating: number;
        bestRating: number;
        ratingValue: number;
      };
    };
    aggregateRating: {
      "@type": string;
      ratingCount: number;
      bestRating: number;
      worstRating: number;
      ratingValue: number;
    };
    contentRating: string;
    genre: Array<string>;
    datePublished: string;
    keywords: string;
    actor: Array<{
      "@type": string;
      url: string;
      name: string;
    }>;
    creator: Array<{
      "@type": string;
      url: string;
      name?: string;
    }>;
    trailer: {
      "@type": string;
      name: string;
      embedUrl: string;
      thumbnail: {
        "@type": string;
        contentUrl: string;
      };
      thumbnailUrl: string;
      url: string;
      description: string;
      duration: string;
      uploadDate: string;
    };
  };
  imdbId: string;
  top: {
    id: string;
    productionStatus: {
      currentProductionStage: {
        id: string;
        text: string;
        __typename: string;
      };
      productionStatusHistory: Array<{
        status: {
          id: string;
          text: string;
          __typename: string;
        };
        __typename: string;
      }>;
      restriction: unknown;
      __typename: string;
    };
    canHaveEpisodes: boolean;
    series: unknown;
    titleText: {
      text: string;
      __typename: string;
    };
    titleType: {
      displayableProperty: {
        value: {
          plainText: string;
          __typename: string;
        };
        __typename: string;
      };
      text: string;
      id: string;
      isSeries: boolean;
      isEpisode: boolean;
      categories: Array<{
        value: string;
        __typename: string;
      }>;
      canHaveEpisodes: boolean;
      __typename: string;
    };
    originalTitleText: {
      text: string;
      __typename: string;
    };
    certificate: {
      rating: string;
      __typename: string;
    };
    releaseYear: {
      year: number;
      endYear: unknown;
      __typename: string;
    };
    releaseDate: {
      day: number;
      month: number;
      year: number;
      __typename: string;
    };
    runtime: {
      seconds: number;
      displayableProperty: {
        value: {
          plainText: string;
          __typename: string;
        };
        __typename: string;
      };
      __typename: string;
    };
    canRate: {
      isRatable: boolean;
      __typename: string;
    };
    ratingsSummary: {
      aggregateRating: number;
      voteCount: number;
      __typename: string;
    };
    meterRanking: {
      currentRank: number;
      rankChange: {
        changeDirection: string;
        difference: number;
        __typename: string;
      };
      __typename: string;
    };
    primaryImage: {
      id: string;
      width: number;
      height: number;
      url: string;
      caption: {
        plainText: string;
        __typename: string;
      };
      __typename: string;
    };
    images: {
      total: number;
      edges: Array<{
        node: {
          id: string;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    videos: {
      total: number;
      __typename: string;
    };
    primaryVideos: {
      edges: Array<{
        node: {
          id: string;
          createdDate: string;
          isMature: boolean;
          runtime: {
            value: number;
            __typename: string;
          };
          name: {
            value: string;
            language: string;
            __typename: string;
          };
          description: {
            value: string;
            language: string;
            __typename: string;
          };
          timedTextTracks: Array<unknown>;
          recommendedTimedTextTrack: unknown;
          thumbnail: {
            url: string;
            height: number;
            width: number;
            __typename: string;
          };
          primaryTitle: {
            id: string;
            titleText: {
              text: string;
              __typename: string;
            };
            originalTitleText: {
              text: string;
              __typename: string;
            };
            releaseYear: {
              year: number;
              __typename: string;
            };
            __typename: string;
          };
          playbackURLs: Array<{
            displayName: {
              value: string;
              language: string;
              __typename: string;
            };
            videoMimeType: string;
            videoDefinition: string;
            url: string;
            __typename: string;
          }>;
          contentType: {
            id: string;
            displayName: {
              value: string;
              __typename: string;
            };
            __typename: string;
          };
          previewURLs: Array<{
            displayName: {
              value: string;
              language: string;
              __typename: string;
            };
            videoMimeType: string;
            videoDefinition: string;
            url: string;
            __typename: string;
          }>;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    externalLinks: {
      total: number;
      __typename: string;
    };
    metacritic: unknown;
    keywords: {
      total: number;
      edges: Array<{
        node: {
          text: string;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    genres: {
      genres: Array<{
        text: string;
        id: string;
        __typename: string;
      }>;
      __typename: string;
    };
    plot: {
      plotText: {
        plainText: string;
        __typename: string;
      };
      language: {
        id: string;
        __typename: string;
      };
      __typename: string;
    };
    plotContributionLink: {
      url: string;
      __typename: string;
    };
    credits: {
      total: number;
      __typename: string;
    };
    principalCredits: Array<{
      totalCredits: number;
      category: {
        text: string;
        id: string;
        __typename: string;
      };
      credits: Array<{
        name: {
          nameText: {
            text: string;
            __typename: string;
          };
          id: string;
          __typename: string;
        };
        attributes: unknown;
        __typename: string;
      }>;
      __typename: string;
    }>;
    reviews: {
      total: number;
      __typename: string;
    };
    criticReviewsTotal: {
      total: number;
      __typename: string;
    };
    triviaTotal: {
      total: number;
      __typename: string;
    };
    engagementStatistics: {
      watchlistStatistics: {
        displayableCount: {
          text: string;
          __typename: string;
        };
        __typename: string;
      };
      __typename: string;
    };
    subNavCredits: {
      total: number;
      __typename: string;
    };
    subNavReviews: {
      total: number;
      __typename: string;
    };
    subNavTrivia: {
      total: number;
      __typename: string;
    };
    subNavFaqs: {
      total: number;
      __typename: string;
    };
    subNavTopQuestions: {
      total: number;
      __typename: string;
    };
    titleGenres: {
      genres: Array<{
        genre: {
          text: string;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    meta: {
      canonicalId: string;
      publicationStatus: string;
      __typename: string;
    };
    castPageTitle: {
      edges: Array<{
        node: {
          name: {
            id: string;
            nameText: {
              text: string;
              __typename: string;
            };
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    creatorsPageTitle: Array<{
      credits: Array<{
        name: {
          id: string;
          nameText: {
            text: string;
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    }>;
    directorsPageTitle: Array<unknown>;
    countriesOfOrigin: {
      countries: Array<{
        id: string;
        __typename: string;
      }>;
      __typename: string;
    };
    production: {
      edges: Array<{
        node: {
          company: {
            id: string;
            companyText: {
              text: string;
              __typename: string;
            };
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    featuredReviews: {
      edges: Array<{
        node: {
          author: {
            nickName: string;
            __typename: string;
          };
          summary: {
            originalText: string;
            __typename: string;
          };
          text: {
            originalText: {
              plainText: string;
              __typename: string;
            };
            __typename: string;
          };
          authorRating: number;
          submissionDate: string;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    __typename: string;
  };
  main: {
    id: string;
    wins: {
      total: number;
      __typename: string;
    };
    nominations: {
      total: number;
      __typename: string;
    };
    prestigiousAwardSummary: {
      nominations: number;
      wins: number;
      award: {
        text: string;
        id: string;
        event: {
          id: string;
          __typename: string;
        };
        __typename: string;
      };
      __typename: string;
    };
    ratingsSummary: {
      topRanking: {
        id: string;
        text: {
          value: string;
          __typename: string;
        };
        rank: number;
        __typename: string;
      };
      __typename: string;
    };
    episodes: {
      episodes: {
        total: number;
        __typename: string;
      };
      seasons: Array<{
        number: number;
        __typename: string;
      }>;
      years: Array<{
        year: number;
        __typename: string;
      }>;
      totalEpisodes: {
        total: number;
        __typename: string;
      };
      unknownSeasonEpisodes: {
        total: number;
        __typename: string;
      };
      topRated: {
        edges: Array<{
          node: {
            ratingsSummary: {
              aggregateRating: number;
              __typename: string;
            };
            __typename: string;
          };
          __typename: string;
        }>;
        __typename: string;
      };
      __typename: string;
    };
    videos: {
      total: number;
      __typename: string;
    };
    videoStrip: {
      edges: Array<{
        node: {
          id: string;
          contentType: {
            displayName: {
              value: string;
              __typename: string;
            };
            __typename: string;
          };
          name: {
            value: string;
            __typename: string;
          };
          runtime: {
            value: number;
            __typename: string;
          };
          thumbnail: {
            height: number;
            url: string;
            width: number;
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    titleMainImages: {
      total: number;
      edges: Array<{
        node: {
          id: string;
          url: string;
          caption: {
            plainText: string;
            __typename: string;
          };
          height: number;
          width: number;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    productionStatus: {
      currentProductionStage: {
        id: string;
        text: string;
        __typename: string;
      };
      productionStatusHistory: Array<{
        status: {
          id: string;
          text: string;
          __typename: string;
        };
        __typename: string;
      }>;
      restriction: unknown;
      __typename: string;
    };
    primaryImage: {
      id: string;
      __typename: string;
    };
    imageUploadLink: {
      url: string;
      __typename: string;
    };
    titleType: {
      id: string;
      canHaveEpisodes: boolean;
      __typename: string;
    };
    cast: {
      edges: Array<{
        node: {
          name: {
            id: string;
            nameText: {
              text: string;
              __typename: string;
            };
            primaryImage: {
              url: string;
              width: number;
              height: number;
              __typename: string;
            };
            __typename: string;
          };
          attributes: unknown;
          category: {
            id: string;
            __typename: string;
          };
          characters: Array<{
            name: string;
            __typename: string;
          }>;
          episodeCredits: {
            total: number;
            yearRange: {
              year: number;
              endYear: unknown;
              __typename: string;
            };
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    creators: Array<{
      totalCredits: number;
      category: {
        text: string;
        __typename: string;
      };
      credits: Array<{
        name: {
          id: string;
          nameText: {
            text: string;
            __typename: string;
          };
          __typename: string;
        };
        attributes: unknown;
        __typename: string;
      }>;
      __typename: string;
    }>;
    directors: Array<unknown>;
    writers: Array<unknown>;
    isAdult: boolean;
    moreLikeThisTitles: {
      edges: Array<{
        node: {
          id: string;
          titleText: {
            text: string;
            __typename: string;
          };
          titleType: {
            id: string;
            text: string;
            canHaveEpisodes: boolean;
            displayableProperty: {
              value: {
                plainText: string;
                __typename: string;
              };
              __typename: string;
            };
            __typename: string;
          };
          originalTitleText: {
            text: string;
            __typename: string;
          };
          primaryImage: {
            id: string;
            width: number;
            height: number;
            url: string;
            caption: {
              plainText: string;
              __typename: string;
            };
            __typename: string;
          };
          releaseYear: {
            year: number;
            endYear?: number;
            __typename: string;
          };
          ratingsSummary: {
            aggregateRating: number;
            voteCount: number;
            __typename: string;
          };
          runtime?: {
            seconds: number;
            __typename: string;
          };
          certificate: {
            rating: string;
            __typename: string;
          };
          canRate: {
            isRatable: boolean;
            __typename: string;
          };
          titleGenres: {
            genres: Array<{
              genre: {
                text: string;
                __typename: string;
              };
              __typename: string;
            }>;
            __typename: string;
          };
          canHaveEpisodes: boolean;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    triviaTotal: {
      total: number;
      __typename: string;
    };
    trivia: {
      edges: Array<{
        node: {
          text: {
            plaidHtml: string;
            __typename: string;
          };
          trademark: unknown;
          relatedNames: unknown;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    goofsTotal: {
      total: number;
      __typename: string;
    };
    goofs: {
      edges: Array<{
        node: {
          text: {
            plaidHtml: string;
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    quotesTotal: {
      total: number;
      __typename: string;
    };
    quotes: {
      edges: Array<{
        node: {
          lines: Array<{
            characters: Array<{
              character: string;
              name: {
                id: string;
                __typename: string;
              };
              __typename: string;
            }>;
            text: string;
            stageDirection: unknown;
            __typename: string;
          }>;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    crazyCredits: {
      edges: Array<unknown>;
      __typename: string;
    };
    alternateVersions: {
      total: number;
      edges: Array<unknown>;
      __typename: string;
    };
    connections: {
      edges: Array<{
        node: {
          associatedTitle: {
            id: string;
            releaseYear: {
              year: number;
              __typename: string;
            };
            titleText: {
              text: string;
              __typename: string;
            };
            originalTitleText: {
              text: string;
              __typename: string;
            };
            series: {
              series: {
                titleText: {
                  text: string;
                  __typename: string;
                };
                originalTitleText: {
                  text: string;
                  __typename: string;
                };
                __typename: string;
              };
              __typename: string;
            };
            __typename: string;
          };
          category: {
            text: string;
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    soundtrack: {
      edges: Array<{
        node: {
          text: string;
          comments: Array<{
            plaidHtml: string;
            __typename: string;
          }>;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    titleText: {
      text: string;
      __typename: string;
    };
    originalTitleText: {
      text: string;
      __typename: string;
    };
    releaseYear: {
      year: number;
      __typename: string;
    };
    reviews: {
      total: number;
      __typename: string;
    };
    featuredReviews: {
      edges: Array<{
        node: {
          id: string;
          author: {
            nickName: string;
            userId: string;
            __typename: string;
          };
          summary: {
            originalText: string;
            __typename: string;
          };
          text: {
            originalText: {
              plaidHtml: string;
              __typename: string;
            };
            __typename: string;
          };
          authorRating: number;
          submissionDate: string;
          helpfulness: {
            upVotes: number;
            downVotes: number;
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    canRate: {
      isRatable: boolean;
      __typename: string;
    };
    iframeAddReviewLink: {
      url: string;
      __typename: string;
    };
    topQuestions: {
      total: number;
      edges: Array<{
        node: {
          attributeId: string;
          question: {
            plainText: string;
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    faqs: {
      total: number;
      edges: Array<{
        node: {
          id: string;
          question: {
            plainText: string;
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    releaseDate: {
      day: number;
      month: number;
      year: number;
      country: {
        id: string;
        text: string;
        __typename: string;
      };
      __typename: string;
    };
    countriesOfOrigin: {
      countries: Array<{
        id: string;
        text: string;
        __typename: string;
      }>;
      __typename: string;
    };
    detailsExternalLinks: {
      edges: Array<{
        node: {
          url: string;
          label: string;
          externalLinkRegion: unknown;
          __typename: string;
        };
        __typename: string;
      }>;
      total: number;
      __typename: string;
    };
    spokenLanguages: {
      spokenLanguages: Array<{
        id: string;
        text: string;
        __typename: string;
      }>;
      __typename: string;
    };
    akas: {
      edges: Array<{
        node: {
          text: string;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    filmingLocations: {
      edges: Array<{
        node: {
          text: string;
          location: string;
          attributes: Array<{
            text: string;
            __typename: string;
          }>;
          __typename: string;
        };
        __typename: string;
      }>;
      total: number;
      __typename: string;
    };
    production: {
      edges: Array<{
        node: {
          company: {
            id: string;
            companyText: {
              text: string;
              __typename: string;
            };
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    companies: {
      total: number;
      __typename: string;
    };
    productionBudget: unknown;
    lifetimeGross: unknown;
    openingWeekendGross: unknown;
    worldwideGross: unknown;
    technicalSpecifications: {
      soundMixes: {
        items: Array<{
          id: string;
          text: string;
          attributes: Array<unknown>;
          __typename: string;
        }>;
        __typename: string;
      };
      aspectRatios: {
        items: Array<{
          aspectRatio: string;
          attributes: Array<unknown>;
          __typename: string;
        }>;
        __typename: string;
      };
      colorations: {
        items: Array<{
          conceptId: string;
          text: string;
          attributes: Array<unknown>;
          __typename: string;
        }>;
        __typename: string;
      };
      __typename: string;
    };
    runtime: {
      seconds: number;
      __typename: string;
    };
    series: unknown;
    canHaveEpisodes: boolean;
    contributionQuestions: {
      contributionLink: {
        url: string;
        __typename: string;
      };
      edges: Array<unknown>;
      __typename: string;
    };
    __typename: string;
  };
  fake: {
    "#TITLE": string;
    "#YEAR": number;
    "#IMDB_ID": string;
    "#RANK": number;
    "#ACTORS": string;
    "#AKA": string;
    "#IMDB_URL": string;
    "#IMDB_IV": string;
    "#IMG_POSTER": string;
    photo_width: number;
    photo_height: number;
  };
  storyLine: {
    id: string;
    summaries: {
      edges: Array<{
        node: {
          plotText: {
            plaidHtml: string;
            __typename: string;
          };
          experimental_translatedPlotText: unknown;
          author: string;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    outlines: {
      edges: Array<{
        node: {
          plotText: {
            plaidHtml: string;
            __typename: string;
          };
          experimental_translatedPlotText: unknown;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    synopses: {
      edges: Array<{
        node: {
          plotText: {
            plaidHtml: string;
            __typename: string;
          };
          experimental_translatedPlotText: unknown;
          __typename: string;
        };
        __typename: string;
      }>;
      __typename: string;
    };
    storylineKeywords: {
      edges: Array<{
        node: {
          legacyId: string;
          text: string;
          __typename: string;
        };
        __typename: string;
      }>;
      total: number;
      __typename: string;
    };
    taglines: {
      edges: Array<{
        node: {
          text: string;
          experimental_translatedText: unknown;
          __typename: string;
        };
        __typename: string;
      }>;
      total: number;
      __typename: string;
    };
    genres: {
      genres: Array<{
        id: string;
        text: string;
        __typename: string;
      }>;
      __typename: string;
    };
    certificate: {
      rating: string;
      ratingReason: unknown;
      ratingsBody: unknown;
      __typename: string;
    };
    parentsGuide: {
      guideItems: {
        total: number;
        __typename: string;
      };
      __typename: string;
    };
    __typename: string;
  };
};

type SearchResponse = {
  ok: boolean;
  description: {
    "#TITLE": string;
    "#YEAR": number;
    "#IMDB_ID": string;
    "#RANK": number;
    "#ACTORS": string;
    "#AKA": string;
    "#IMDB_URL": string;
    "#IMDB_IV": string;
    "#IMG_POSTER": string;
    photo_width: number;
    photo_height: number;
  }[];
  error_code: number;
};

type FindRandomResponse = {
  ok: boolean;
  description: {
    "#TITLE": string;
    "#YEAR": number;
    "#IMDB_ID": string;
    "#RANK": number;
    "#ACTORS": string;
    "#AKA": string;
    "#IMDB_URL": string;
    "#IMDB_IV": string;
    "#IMG_POSTER": string;
    photo_width: number;
    photo_height: number;
  }[];
  error_code: number;
};
