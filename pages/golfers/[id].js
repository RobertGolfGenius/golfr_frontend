import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import useUserScores from '../../lib/useUserScores'
import { useRouter } from 'next/router'
import ScoreCard from '../../components/ScoreCard'

export default function Golfer() {
  const router = useRouter()
  const { id } = router.query
  const { scores, error } = useUserScores(id)

  const userData = scores ?
    <div className="text-3xl my-3">{scores[0].user_name} scores</div> : null

  return (
    <Layout>
      {error ? (error) :
        <div>
          {userData}
          {scores && scores.map(score => (
            <ScoreCard
              key={score.id}
              id={score.id}
              totalScore={score.total_score}
              playedAt={score.played_at}
              userId={score.user_id}
              userName={score.user_name}
            />
          ))}
        </div>
      }
    </Layout>
  )
}
