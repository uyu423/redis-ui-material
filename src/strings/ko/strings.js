const strings = {
    error: {
        cleared_license: '라이센스 취소',
        invalid_license: '라이센스 만료',
        server_error: '서버 에러, 다시 시도하세요.',
    },
    title: {
        donate: '기부',
        jsonRecursive: '모든 리프 확장',
        name: 'P3X Redis UI',
        nameDonated: 'P3X Redis UI+',
        main: '왼쪽 하단 메뉴에서 연결할 Redis를 선택할 수 있습니다.',
        statistics: '통계',
        error: '에러',
        connectingRedis: 'Redis에 연결 중 ...',
        socketioConnectError: 'Socket.IO 에러',

        db: 'DB',
        server: '서버',
        clients: '클라이언트',
        memory: '메모리',
        persistence: '영속성',
        stats: '통계',
        replication: '복제',
        cpu: 'CPU',
        cluster: '클러스터',
    },
    confirm: {
        title: '확인',
        alert: '경고',
        info: '정보',
        deleteListItem: '정말로 리스트에서 아이템을 삭제합니까?',
        deleteHashKey: '정말로 해당 hash key 아이템을 삭제합니까?',
        deleteSetMember: '정말로 해당 set member를 삭제합니까?',
        deleteZSetMember: '정말로 해당 sorted set member를 삭제합니까?',
        deleteConnection: '확인',
        deleteConnectionText: '정말로 해당 Redis 연결을 제거합니까?',
        deleteNode: '정말로 해당 Redis 노드를 제거합니까?',
        deleteAllKeys: (opts) => {
            return `해당하는 트리와 하위의 모든 키를 삭제합니까? (${opts.key})?`
        },
        socketioConnectError: 'Socket.IO가 서버에 연결할 수 없습니다. 재시도 바랍니다. 문제가 지속될 경우 직접 문제를 해결해야합니다. 클라이언트는 해결 방법을 알 수 없습니다.',
        deleteKey: '정말로 해당 키를 삭제합니까?',
        rename: {
            title: '정말로 해당 키의 이름을 변경합니까?',
            textContent: 'If you click the rename button, it will rename this key forever.',
            placeholder: 'The Redis key (required)',

        },
        ttl: {
            title: 'Are you to change this keys\'s TTL?',
            textContent: 'If you click the change TTL button, it will rename this key\'s time to live, empty will persist this key keep forever.',
            placeholder: 'The Redis key\'s TTL (integer or empty)',
            placeholderPlaceholder: 'Empty means it persists forever, otherwise the used integer.',
            convertTextToTime: 'Convert text to time',
            convertTextToTimePlaceholder: 'Eg. 1d will be 86400',
        },
        license: {
            title: 'Enable donated license?',
            textContent: 'If you want to use the donated functions, please contact alabard@gmail.com to request a license. The donation is $1/month.',
            placeholder: 'License key',
        },
    },
    language: {
        // When you translate the english name, keep the Language in English
        // eg. Inglés / English
        en: 'English',
        zn: 'Chinese / 中文',
        ko: 'Korean / 한국어',
    },
    intention: {
        copy: '복사',
        saveWithFormatJson: '포맷팅과 함께 저장',
        formatJson: '포맷팅 Json',
        pubsubMonitor: 'PubSub 모니터',
        // When you translate the language, keep the Language in English
        // eg. Idioma / Language
        language: '언어',
        ok: 'OK',
        addKey: `Add to this key`,
        addKeyRoot: 'Add a root key',
        reloadKey: 'Reload key',
        reload: '다시 불러오기',
        close: '닫기',
        commands: '명령어',
        view: '뷰',
        statistics: '통계',
        refresh: '새로고침',
        clear: '클리어',
        rename: '이름 변경',
        main: '홈',
        cancel: '취소',
        theme: '테마',
        github: 'GitHub',
        githubRepo: '저장소',
        githubTodo: '해야할 일',
        githubChangelog: '변경사항',
        settings: '설정',
        connect: '연결',
        disconnect: '연결 끊기',
        overview: '개요',
        console: '콘솔',
        noConnections: 'No connections, add a connection in the settings menu.',
        noConnectionsInSettings: 'No connections, you may add a NEW CONNECTION above.',
        connectionAdd: '새로운 연결',
        extend: '펼치기',
        collapse: '접기',
        add: '추가',
        edit: '수정',
        save: '저장',
        ttl: 'TTL 설정',
        license: '라이센스 설정',
        'delete': '삭제',
        remove: '제거',
        'sure': '확실',
        testConnection: '연결 테스트',
        getKey: 'Loading Redis key and associated data ...',
        jsonViewShow: 'JSON 트리 표시',
        jsonViewEditor: 'JSON 편진',
    },
    label: {
        unableToLoadKey: ({ key }) => {
          return `Unable to load this key: ${key}. The exact error is in the console.`
        },
        bigJson: 'This JSON object is over 10 kb, so make sure you know what you doing, because some functions can be slow rendering.',
        addNode: 'Add node',
        validateJson: 'Validate JSON',
        reducedFunction: `Reduced functionality`,
        tooManyKeys: (opts) => {
            return `For the full maximum functions allowed keys total is ${opts.maxLightKeysCount} count. This database has over the allowed keys in total ${opts.count}. The key sorting and the additional fancy tree information is disabled. The searching is happening only on the server instead the client search.`;
        },
        redisCommandNotFound: 'No Redis command match found ...',
        treeKeyStore: `The sorting (natural compare) is executed on the client aka the browser, which means it has a penalty for big large sets, like over 10k keys, it might add a little time to the page rendering. There is no key sorting in Redis, only like this.`,
        socketIoTimeout: (options) => {
            return `The Socket.IO timed out for this request (max ${options.timeout / 1000} seconds) ...`;
        },
        resizerInfo: (options) => {
            return `Left or right panel minimum width is ${options.width}px`
        },
        jsonViewNotParsable: 'This value is not JSON parsable  ',
        ttlTitle: 'Set the TTL in seconds',
        passwordSecure: 'The password might will be empty, but still it will show characters, this is a security feature.',
        treeSeparatorEmpty: 'If the tree separator is empty, the tree wil have no nested nodes, just a pure list',
        treeSeparatorEmptyNote: 'No nested nodes, just a pure list',
        welcomeConsole: 'Welcome to the Redis Console',
        welcomeConsoleInfo: 'TAB or SHIFT + TAB completion like bash is enabled',
        welcomeConsoleInfo2: 'Cursor UP or DOWN history is enabled',
        redisListIndexInfo: 'Empty to append, -1 to prepend or save it to the position shown.',
        console: 'Console',
        connectiondAdd: 'Add connection',
        connectiondEdit: 'Edit connection',
        connectiondView: 'View connection',
        connections: 'Connections',
        keysSort: {
            on: 'Key sorting on',
            off: 'Key sorting off'
        },
        awsElastiCache: {
            on: 'AWS ElastiCache / Gcloud memorystore on',
            off: 'AWS ElastiCache / Gcloud memorystore off',
        },
        azure: {
            on: 'Azure Redis on',
            off: 'Azure Redis off',
        },
        cluster: {
            on: 'Cluster on',
            off: 'Cluster off',
        },
        theme: {
            light: 'Light',
            dark: 'Dark enterprise',
            darkNeu: 'Dark',
            darkoBluo: 'Darko bluo',
            enterprise: 'Enterprise',
            redis: 'Redis',
            matrix: 'Matrix',
        },
        connected: (opts) => {
            return `Connected: ${opts.name}`
        },
        tree: 'Tree',

    },
    status: {
        dataCopied: 'The data is in the clipboard',
        licenseSaved: 'License saved',
        nodeRemoved: 'Node removed',
        keyIsNotExisting: 'This key could have been deleted or expired.',
        keyCount: (opts) => {
            if (opts.keyCount === 0) {
                return 'No key'
            } else if (opts.keyCount === 1) {
                return '1 key'
            } else {
                return `${opts.keyCount} keys`
            }

        },
        treeExpandAll: 'Expand all tree leafs, this has a cost, might take time ...',
        noRedisKeys: 'There are no keys in this database.',
        redisConnected: 'Redis connected successful',
        reloadingDataInfo: 'Reloading Redis data info',
        added: 'Added',
        saved: 'Updated',
        cancelled: 'Cancelled',
        deleted: 'Deleted',
        savedRedis: 'Redis data is saved',
        redisDisconnected: (opts) => {
            return `The current connection had an error: ${opts.error.message}`
        },
        dbChanged: (opts) => {
            return `The db index set to ${opts.db}. `
        },
        treeDeleted: (opts) => {
            return `The tree key was deleted (${opts.key}).`

        },
        deletedKey: (opts) => {
            return `The key was deleted (${opts.key}).`
        },
        renamedKey: 'This key has been renamed',
        ttlChanged: 'This key\'s TTL has been changed',
        notInteger: 'This input is not an integer',
        persisted: 'This key is persisted forever',
        set: 'The key is set/added'
    },
    code: {
        'delete-connection': 'This connection was deleted, so you are disconnected to this Redis instance.',
        'save-connection': 'This connection was changed, so you are disconnected to this Redis instance. You may re-connect.',
        'readonly-connections': 'Connections add/save/delete are readonly only!',
        'list-out-of-bounds': 'This list index is out of bounds',
        'donation-ware-feature': 'This feature is present in the donation version.',
    },
    form: {
        error: {
            required: 'Required',
            port: 'The port is between 1-65535',
            invalid: 'The form is invalid'
        },
        connection: {
            label: {
                name: 'Name',
                host: 'Hostname',
                port: 'Port',
                password: 'Password',
            },
        },
        treeSettings: {
            maxValueDisplay: 'Max value display string length',
            maxValueDisplayInfo: 'If max value display zero, it shows everything, if it is bigger than 0, it will truncate. If it is -1, it will not show the value without edit for strings, for others, it display everything.',
            maxKeys: 'The max key count',
            maxKeysInfo: 'So that the GUI does not crash, we limit the max key count.',
            keyCount: () => {
                return `Number of keys: ${p3xr.state.keysRaw.length}`
            },
            label: {
                animation: 'Use animation',
                noAnimation: 'No animation',
                jsonFormatTwoSpace: 'Format JSON with 2 spaces',
                jsonFormatFourSpace: 'Format JSON with 4 spaces',
                formName: 'Redis settings',
                searchModeClient: 'Client search mode',
                searchModeServer: 'Server search mode',
                searchModeStartsWith: 'Search with starts with mode',
                searchModeIncludes: 'Search includes mode',
            },
            field: {
                treeSeparator: 'Tree separator',
                treeSeparatorSelector: 'Tree separator selector',
                page: 'Paging count',
                keysSort: 'Sort the keys',
                searchMode: 'Search mode',
                searchModeStartsWith: 'Search starts with / includes'
            },
            error: {
                page: 'The page count must be an integer between 10 - 1000',
                maxValueDisplay: 'The maximum display value must be an integer between -1 and 32768',
                maxKeys: 'The maximum key count value must be an integer between 100 and 100000',
            },

        },
        key: {
            label: {
                formName: {
                    add: 'Add new Redis key',
                    edit: 'Edit Redis key',
                    append: 'Add to existing Redis key',
                }
            },
            field: {
                key: 'Key',
                type: 'Type',
                index: 'Index',
                hashKey: 'Hash key',
                score: 'Score',
                value: 'Value',
            },
            error: {
                key: 'The key is, at least, one character',
                hashKey: 'The hash table key is at least one character',
                score: 'The sorted set score is required',
                value: 'The value is required',
            }
        },
        main: {
            label: {
                database: 'DB',
            }
        }
    },
    page: {
        overview: {
            noConnected: 'There is no connection to Redis.',
            overviewClients: 'List the connected by the count of clients',
            connectedCount: (opt) => {
                if (opt.length === 1) {
                    return '1 client'
                }
                return `${opt.length} clients`

            }
        },
        key: {
            label: {
                key: 'Key',
                encoding: 'Encoding',
                length: 'Size',
                ttl: 'TTL',
                ttlTitle: 'Time To Live',
                type: 'Type',
                ttlNotExpire: 'does not expire',
                lengthString: 'characters',
                lengthItem: 'items',
                actions: 'Actions',
            },
            list: {
                table: {
                    index: 'Index',
                    value: 'Value',
                }
            },
            hash: {
                table: {
                    hashkey: 'Hashkey',
                    value: 'Value',
                }
            },
            set: {
                table: {
                    value: 'Member'
                }
            },
            zset: {
                table: {
                    value: 'Member',
                    score: 'Score',
                }
            }

        },
        treeControls: {
            settings: 'Tree settings',
            expandAll: 'Expand all',
            collapseAll: 'Collapse all',
            search: {
                search: 'Search in the keys',
                clear: 'Clear current search to set empty',
                placeholderClient: 'Search client side',
                placeholderServer: 'Search server side',
                info: 'The client side search means, that it matches the text in the search input. The server side search means, that is it like search in the keys patterns as *{search-text}*. For large search sets, it is better to use server side searching. For smaller search sets, it is better to use client side search mode.' + ` If the keys count is over ${p3xr.settings.maxLightKeysCount}, you can only search on server side.`,
                largeSetInfo: 'In a large set, client side searching is disabled. so right now only server side searching is possible.',
                infoDetails: 'To find out how the search works, please check out the settings'
            },
            pager: {
                next: 'Next',
                prev: 'Previous',
                first: 'First',
                last: 'Last'
            }
        }
    },
    time: {
        years: 'years',
        months: 'months',
        days: 'days',
        year: 'year',
        month: 'month',
        day: 'day',
    },
    redisTypes: {
        string: 'String',
        list: 'List',
        hash: 'Hash table',
        set: 'Set',
        zset: 'Sorted set - zset'
    }
}


module.exports = strings;
