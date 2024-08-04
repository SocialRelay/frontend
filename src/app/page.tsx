'use client';

import React, { useState, useEffect } from "react";
import "./globals.css";
import TextInputComponent from "@/components/text-editor";
import { BASE_URL } from "@/utils/axios";
import { Relay, RelayList } from "@/type/relay";
import moment from "moment";
import { throttle } from 'lodash';


// eslint-disable-next-line @next/next/no-async-client-component
export default function RootLayout() {
  const [page, setPage] = useState<number>(0);
  const [relayId, setRelayId] = useState<string>('');
  const [relays, setRelays] = useState<Relay[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    
  }, []);

  useEffect(() => {
    console.log("useEffect");
    
    const handleScroll = () => throttle(() => {
      console.log(window.innerHeight + document.documentElement.scrollTop, document.documentElement.offsetHeight);
      console.log("asdnajsdjnasd");
      
      
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        if (hasMore && !loading) {
          setPage(page + 1);
        }
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading, page]);

  const getRelays = async (offset = 0) => {
    console.log("getRelays");
    
    setLoading(true);
    try {
      const relayListResponse = await fetch(`${BASE_URL}/relayBook`);
      const relayList: RelayList[] = await relayListResponse.json();

      const relaysResponse = await fetch(`${BASE_URL}/relay/${relayList[0].id}?offset=${offset}&limit=20`);
      const relays: Relay[] = await relaysResponse.json();

      if (relays.length < 20) {
        setHasMore(false);
      }

      setRelayId(relayList[0].id);
      setRelays(prevRelays => [...prevRelays, ...relays]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  console.log(relays);
  
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className='w-content h-5/6 flex flex-col justify-between'>
        <div>
          <h1 className="text-3xl font-bold mb-6">Social Relay</h1>
          <div className="flex flex-col justify-center items-center w-full gap-y-3">
            {relays.map((relay, i) => (
              <div key={i} className='w-full flex flex-row justify-between'>
                <div className='w-9/12 text-lg'>
                  {relay.content}
                </div>
                <div className='w-2/12 text-end text-gray-500 text-sm flex items-center'>
                  {moment(relay.createdAt).format("YY.MM.DD")}
                </div>
              </div>
            ))}
            {
              loading && <div className='w-full flex justify-center'>
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
              </div>
            }
          </div>
        </div>

        <div className="flex justify-center self mt-5">
          <TextInputComponent relayId={relayId} />
        </div>
      </div>
    </div>
  );
}
