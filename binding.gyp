{'targets': [
    {
        'target_name': 'libmill',
        'type': 'static_library',
        'conditions': [
            ['OS=="linux"', {
                'includes': [
                    'linux.gypi',
                ]
            }],
            ['OS=="mac"', {
                'includes': [
                    'mac.gypi',
                ]
            }],
        ],
        'include_dirs': [
            'libmill',
            'libmill/dns'
        ],
        'sources': [
            'libmill/chan.c',
            'libmill/cr.c',
            'libmill/debug.c',
            'libmill/ip.c',
            'libmill/list.c',
            'libmill/poller.c',
            'libmill/slist.c',
            'libmill/stack.c',
            'libmill/tcp.c',
            'libmill/timer.c',
            'libmill/udp.c',
            'libmill/unix.c',
            'libmill/utils.h',
            'libmill/dns/dns.c',
        ]
    },
    {
        'target_name': 'mill',
        'dependencies': [ 'libmill', ],
        'conditions': [ ['OS=="linux"', { 'libraries': [ '-lanl','-lrt' ] }]],
        'include_dirs': [
            "<!(node -e \"require('nan')\")",
            'libmill'
        ],
        'sources': [ 'binding.cc' ],
    }
]}
